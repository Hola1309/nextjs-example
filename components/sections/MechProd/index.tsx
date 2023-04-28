import React, { useEffect, useState, useRef } from 'react';

import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

import Arrow from 'components/environment/Arrow';
import Heading from 'components/environment/Heading';
import Container from 'components/environment/Container';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type MainBlockItems = {
  id: number | string;
  image: string;
};

interface ProductionSliderBlockProps {
  title: string;
  anchor: string;
  arrowClassName: string;
  description: string;
  items: Array<MainBlockItems>;
}

const ProectionProd: React.FC<ProductionSliderBlockProps> = ({
  anchor,
  arrowClassName,
  items,
}) => {
  const [BlockNew, setBlockNew] = useState([{ id: 1, title: '', description: '',sliderList:[{id: '', imgupload: ''}] }]);

  useEffect(() => {
    fetch('/apiaboutUsProdBase/?format=json')
      .then(response => response.json())
      .then(commits => setBlockNew(commits))
  });
  const arrowClassNameNext = `${arrowClassName}__arrow_next`;
  const arrowClassNamePrev = `${arrowClassName}__arrow_prev`;
  const swiperRef = useRef<Swiper | null>(null);
  const [currentSlideIndBase, setCurrentSlideIndBase] = useState(0);
  useEffect(() => {
    if (BlockNew[1].sliderList.length > 1) {
      swiperRef.current = new Swiper(`.${cx('ProductionSliderBlock__items')}`, {
        loop: true,
        slidesPerView: 'auto',
        slideClass: cx('ProductionSliderBlock__item'),
        wrapperClass: cx('ProductionSliderBlock__itemsWrap'),
        navigation: {
          prevEl: `.${cx(arrowClassNamePrev)}`,
          nextEl: `.${cx(arrowClassNameNext)}`,
        },
        on: {
          slideChange: (swiper) => {
            setCurrentSlideIndBase(swiper.realIndex);
          },
        },
      });
    }

    return () => {
      if (swiperRef && swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);
  return (
    <div className={cx('ProductionSliderBlock')}>
      <Container className={cx('ProductionSliderBlock__container')}>
        <div>
        </div>
        <div className={cx('ProductionSliderBlock__contentWrap')}>
          <div className={cx('ProductionSliderBlock__content')}>
            <div id={anchor} className={cx('ProductionSliderBlock__titleWrap')}>
              <Heading className={cx('ProductionSliderBlock__secondTitle')} level="3">
                {BlockNew[1].title}
              </Heading>
            </div>
            <div className={cx('ProductionSliderBlock__textWrap')}>
              <span className={cx('ProductionSliderBlock__underline')}></span>
              <div className={cx('ProductionSliderBlock__descriptionWrap')}>
                <div
                  className={cx('ProductionSliderBlock__description')}
                >
                  {BlockNew[1].description}
                </div>
              </div>
            </div>
          </div>

          <div className={cx('ProductionSliderBlock__content')}>
            <div className={cx('ProductionSliderBlock__items')}>
              <div className={cx('ProductionSliderBlock__itemsWrap')}>
                {BlockNew[1].sliderList.map((item) => (
                  <div className={cx('ProductionSliderBlock__item')} key={item.id}>
                    <div className={cx('ProductionSliderBlock__imageWrap')}>
                      <img
                        className={cx('ProductionSliderBlock__image')}
                        src={item.imgupload}
                        alt={item.imgupload}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={cx('ProductionSliderBlock__navigationWrap')}>
              <div className={cx('ProductionSliderBlock__navigation')}>
                <div className={cx('ProductionSliderBlock__navigation_currentSlide')}>
                  {currentSlideIndBase + 1}
                </div>
                <div className={cx('ProductionSliderBlock__navigation_allSlides')}>
                  /{BlockNew[1].sliderList.length}
                </div>
              </div>
              <div className={cx('ProductionSliderBlock__arrowWrap')}>
                <Arrow
                  className={cx(
                    'ProductionSliderBlock__arrow',
                    arrowClassNamePrev,
                    currentSlideIndBase == 0
                      ? `${cx('ProductionSliderBlock__arrow_disabled')}`
                      : `${cx(arrowClassNamePrev)}`,
                  )}
                  type="left"
                />
                <Arrow
                  className={cx('ProductionSliderBlock__arrow', arrowClassNameNext)}
                  type="right"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProectionProd;
