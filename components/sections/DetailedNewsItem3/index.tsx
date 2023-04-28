import React, { useEffect, useState, useRef } from 'react';

import Link from 'next/link';

import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

import HTMLParse from 'react-html-parser';

import Container from 'components/environment/Container';
import Heading from 'components/environment/Heading';
import Arrow from 'components/environment/Arrow';
import Telegram from 'images/icons/tg.svg';
import Facebook from 'images/icons/fb.svg';
import VK from 'images/icons/vk.svg';
import Twitter from 'images/icons/tw.svg';
import OK from 'images/icons/ok.svg';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type DetailedNewsEventItems = {
  id: number | string;
  description: string;
  titleLink: string;
  link: string;
  mainDescription: string;
};

type DetailedNewsSliderItems = {
  id: number | string;
  titleSlider: string;
  mainDescription: string;
  sliderImages: {
    id: number | string;
    image: string;
  }[];
  sliderDescription: string;
};

type DetailedNewsTextItems = {
  id: number | string;
  titleText: string;
  textDescription: string;
};

interface DetailedNewsItemProps {
  url: string;
  title: string;
  section: string;
  date: string;
  image: string;
  eventItems: Array<DetailedNewsEventItems>;
  sliderItems: Array<DetailedNewsSliderItems>;
  textItems: Array<DetailedNewsTextItems>;
}

const DetailedNewsItem3: React.FC<DetailedNewsItemProps> = ({ url, title, sliderItems }) => {
  const swiperRef = useRef<Swiper | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    swiperRef.current = new Swiper(`.${cx('DetailedNewsItem__items')}`, {
      loop: false,
      slidesPerView: 'auto',
      slideClass: cx('DetailedNewsItem__item'),
      wrapperClass: cx('DetailedNewsItem__itemsWrap'),
      navigation: {
        prevEl: `.${cx('DetailedNewsItem__sliderArrow_prev')}`,
        nextEl: `.${cx('DetailedNewsItem__sliderArrow_next')}`,
      },
      on: {
        slideChange: (swiper) => {
          setCurrentSlide(swiper.realIndex);
        },
      },
    });

    return () => {
      if (swiperRef && swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);
  return (
    <div className={cx('DetailedNewsItem')}>
      <Container className={cx('DetailedNewsItem__container')}>
        <Link href={url}>
          <div className={cx('DetailedNewsItem__arrowWrap')}>
            <Arrow
              className={cx('DetailedNewsItem__breadcrumbArrow', 'DetailedNewsItem__arrow_prev')}
              type="left"
            />
            <div className={cx('DetailedNewsItem__breadcrumbText')}>Все новости</div>
          </div>
        </Link>

        <div className={cx('DetailedNewsItem__titleWrap')}>
          <Heading className={cx('DetailedNewsItem__title')} level="2">
            {HTMLParse(title)}
          </Heading>
        </div>

        <div className={cx('DetailedNewsItem__contentWrap')}>
          <div className={cx('DetailedNewsItem__infoWrap')}>
            <div className={cx('DetailedNewsItem__content')}>
              <div className={cx('DetailedNewsItem__eventsWrap')}></div>
            </div>
            <div className={cx('DetailedNewsItem__content')}>
              <div className={cx('DetailedNewsItem__eventsWrap')}>
                {sliderItems.map((sliderItem) => (
                  <div className={cx('DetailedNewsItem__eventWrap')} key={sliderItem.id}>
                    <div className={cx('DetailedNewsItem__items')}>
                      <div className={cx('DetailedNewsItem__itemsWrap')}>
                        {sliderItem.sliderImages.map((sliderImage) => (
                          <div className={cx('DetailedNewsItem__item')} key={sliderImage.id}>
                            <div className={cx('DetailedNewsItem__eventImageWrap')}>
                              <img
                                className={cx('DetailedNewsItem__eventImage')}
                                src={sliderImage.image}
                                alt={sliderImage.image}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className={cx('DetailedNewsItem__navigationWrap')}>
                        <div className={cx('DetailedNewsItem__navigation')}>
                          <div className={cx('DetailedNewsItem__navigation_currentSlide')}>
                            {currentSlide + 1}
                          </div>
                          <div className={cx('DetailedNewsItem__navigation_allSlides')}>
                            /{sliderItem.sliderImages.length}
                          </div>
                        </div>
                        <div className={cx('DetailedNewsItem__sliderArrowWrap')}>
                          <Arrow
                            className={cx(
                              'DetailedNewsItem__arrow',
                              'DetailedNewsItem__sliderArrow_prev',
                              currentSlide == 0
                                ? `${cx('DetailedNewsItem__arrow_disabled')}`
                                : `${cx('DetailedNewsItem__sliderArrow_prev')}`,
                            )}
                            type="left"
                          />
                          <Arrow
                            className={cx(
                              'DetailedNewsItem__arrow',
                              'DetailedNewsItem__sliderArrow_next',
                            )}
                            type="right"
                          />
                        </div>
                      </div>
                    </div>

                    <div className={cx('DetailedNewsItem__eventMainDescription')}>
                      {sliderItem.sliderDescription}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={cx('DetailedNewsItem__socialWrap')}>
            <div className={cx('DetailedNewsItem__socialText')}>Поделиться</div>
            <div className={cx('DetailedNewsItem__socialWrapIcon')}>
              <div className={cx('DetailedNewsItem__socialIcon')}>
                <Telegram />
              </div>
              <div className={cx('DetailedNewsItem__socialIcon')}>
                <Facebook />
              </div>
              <div className={cx('DetailedNewsItem__socialIcon')}>
                <VK />
              </div>
              <div className={cx('DetailedNewsItem__socialIcon')}>
                <Twitter />
              </div>
              <div className={cx('DetailedNewsItem__socialIcon')}>
                <OK />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailedNewsItem3;
