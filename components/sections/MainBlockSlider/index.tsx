import React, { useEffect, useRef, useState } from 'react';

import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);
import Container from 'components/environment/Container';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
import Arrow from 'components/environment/Arrow';

const cx = cn.bind(styles);

type MainBlockItems = {
  id: number | string;
  image: string;
};

interface MainBlockSliderProps {
  title: string;
  description: string;
  items: Array<MainBlockItems>;
  download?: boolean;
  url: string;
}



const MainBlockSlider: React.FC<MainBlockSliderProps> = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [MainBlockItemsNew, setMainBlockItemsNew] = useState([{ id: 1, title: '', sliderList:[{id: '1', imgupload: ''}],textList:[{id: '', text: ''}]}]);
useEffect(() => {
  fetch('/apiaboutUsMainBlockViewSet/?format=json&id=1')
    .then(response => response.json())
    .then(commits => setMainBlockItemsNew(commits))
}, []);
  useEffect(() => {
    if (MainBlockItemsNew[0].sliderList.length > 1) {
      swiperRef.current = new Swiper(`.${cx('MainBlockSlider__items')}`, {
        loop: false,
        slidesPerView: 'auto',
        slideClass: cx('MainBlockSlider__item'),
        wrapperClass: cx('MainBlockSlider__itemsWrap'),
        navigation: {
          prevEl: `.${cx('MainBlockSlider__arrow_prev')}`,
          nextEl: `.${cx('MainBlockSlider__arrow_next')}`,
        },
        on: {
          slideChange: (swiper) => {
            setCurrentSlide(swiper.realIndex);
          },
        },
      });
    }

    return () => {
      if (swiperRef && swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [MainBlockItemsNew[0].sliderList]);
  return (
    <div className={cx('MainBlockSlider')}>
      <Container className={cx('MainBlockSlider__container')}>
        <div className={cx('MainBlockSlider__titleWrap')}>
          <h1 className={cx('MainBlockSlider__title')}>{MainBlockItemsNew[0].title}</h1>
        </div>
        <div className={cx('MainBlockSlider__contentWrap')}>
          <div className={cx('MainBlockSlider__content')}>
            <div className={cx('MainBlockSlider__textWrap')}>
              
                {MainBlockItemsNew[0].textList.map((item) => (
                  <div className={cx('MainBlockSlider__description')}  key={item.id}>
                    {item.text}
                  </div>
                ))}
            </div>
          </div>

          <div className={cx('MainBlockSlider__content')}>
            <div className={cx('MainBlockSlider__items')}>
              <div className={cx('MainBlockSlider__itemsWrap')}>
                {MainBlockItemsNew[0].sliderList.map((item) => (
                  <div className={cx('MainBlockSlider__item')} key={item.id}>
                    <div className={cx('MainBlockSlider__imageWrap')}>
                      <img
                        className={cx('MainBlockSlider__image')}
                        src={item.imgupload}
                        alt={item.imgupload}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={cx('MainBlockSlider__navigationWrap')}>
              <div className={cx('MainBlockSlider__navigation')}>
                <div className={cx('MainBlockSlider__navigation_currentSlide')}>
                  {currentSlide + 1}
                </div>
                <div className={cx('MainBlockSlider__navigation_allSlides')}>/{MainBlockItemsNew[0].sliderList.length}</div>
              </div>
              <div className={cx('MainBlockSlider__arrowWrap')}>
                <Arrow
                  className={cx(
                    'MainBlockSlider__arrow',
                    'MainBlockSlider__arrow_prev',
                    currentSlide == 0
                      ? `${cx('MainBlockSlider__arrow_disabled')}`
                      : `${cx('MainBlockSlider__arrow_prev')}`,
                  )}
                  type="left"
                />
                <Arrow
                  className={cx('MainBlockSlider__arrow', 'MainBlockSlider__arrow_next')}
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

export default MainBlockSlider;
