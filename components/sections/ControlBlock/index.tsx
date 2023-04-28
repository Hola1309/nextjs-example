import React, { useEffect, useState, useRef } from 'react';

import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

import HTMLParse from 'react-html-parser';
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

const BaseBlock: React.FC<ProductionSliderBlockProps> = ({
  title,
  anchor,
  arrowClassName,
  description,
  items,
}) => {
  const arrowClassNameNext = `${arrowClassName}__arrow_next`;
  const arrowClassNamePrev = `${arrowClassName}__arrow_prev`;
  const swiperRef = useRef<Swiper | null>(null);
  const [currentSlideIndBase, setCurrentSlideIndBase] = useState(0);
  useEffect(() => {
    if (items.length > 1) {
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
  }, [items]);
  return (
    <div className={cx('ProductionSliderBlock')}>
      <Container className={cx('ProductionSliderBlock__container')}>
        <div className={cx('ProductionSliderBlock__contentWrap')}>
          <div className={cx('ProductionSliderBlock__content')}>
            <div id={anchor} className={cx('ProductionSliderBlock__titleWrap')}>
              <Heading className={cx('ProductionSliderBlock__secondTitle')} level="3">
                {HTMLParse(title)}
              </Heading>
            </div>
            <div className={cx('ProductionSliderBlock__textWrap')}>
              <span className={cx('ProductionSliderBlock__underline')}></span>
              <div className={cx('ProductionSliderBlock__descriptionWrap')}>
                <div className={cx('ProductionSliderBlock__description')}>
                  {HTMLParse(description)}
                </div>
              </div>
            </div>
          </div>

          <div className={cx('ProductionSliderBlock__content')}>
            <div className={cx('ProductionSliderBlock__items')}>
              <div className={cx('ProductionSliderBlock__itemsWrap')}>
                {items.map((item) => (
                  <div className={cx('ProductionSliderBlock__item')} key={item.id}>
                    <div className={cx('ProductionSliderBlock__imageWrap')}>
                      <img
                        className={cx('ProductionSliderBlock__image')}
                        src={item.image}
                        alt={item.image}
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
                  /{items.length}
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

export default BaseBlock;
