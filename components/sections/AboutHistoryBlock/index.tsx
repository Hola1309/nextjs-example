import React, { useEffect, useState, useRef } from 'react';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

import HTMLParse from 'react-html-parser';
import Arrow from 'components/environment/Arrow';
import Heading from '../../environment/Heading/index';
import Container from 'components/environment/Container';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type AboutHistoryBlockItems = {
  id: number | string;
  image: string;
  description: string;
  subtitle: string;
};

interface AboutHistoryBlockProps {
  title: string;
  items: Array<AboutHistoryBlockItems>;
}

const AboutHistoryBlock: React.FC<AboutHistoryBlockProps> = ({ title, items }) => {
  const swiperRef = useRef<Swiper | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const menu = [
    '2022',
    '2019',
    '2017',
    '2016',
    '2014',
    '2008',
    '2005',
    '1998',
    '1997',
    '1994',
    '1993',
    '1992',
    '1991',
    '1990',
  ];
  useEffect(() => {
    if (items.length > 2) {
      swiperRef.current = new Swiper(`.${cx('AboutHistoryBlock__items')}`, {
        loop: false,
        slidesPerView: 'auto',
        slideClass: cx('AboutHistoryBlock__item'),
        wrapperClass: cx('AboutHistoryBlock__itemsWrap'),
        navigation: {
          prevEl: `.${cx('AboutHistoryBlock__arrow_prev')}`,
          nextEl: `.${cx('AboutHistoryBlock__arrow_next')}`,
        },
        on: {
          slideChange: (swiper) => {
            setCurrentSlide(swiper.realIndex);
          },
        },
        pagination: {
          el: `.${cx('AboutHistoryBlock__swiper-pagination')}`,
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 5,
          bulletClass: cx('AboutHistoryBlock__swiper-pagination-bullet'),
          bulletActiveClass: cx('AboutHistoryBlock__swiper-pagination-bullet-active'),

          renderBullet: function (index, className) {
            return `<span class="${className}">${menu[index]}</span>`;
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
    <div className={cx('AboutHistoryBlock')}>
      <Container className={cx('AboutHistoryBlock__container')}>
        <div className={cx('AboutHistoryBlock__titleWrap')}>
          <h1 className={cx('AboutHistoryBlock__title')}>{HTMLParse(title)}</h1>
        </div>
        <div className={cx('AboutHistoryBlock__contentWrap')}>
          <div className={cx('AboutHistoryBlock__content')}>
            <div className={cx('AboutHistoryBlock__items')}>
              <div className={cx('AboutHistoryBlock__itemsWrap')}>
                {items.map((item) => (
                  <div className={cx('AboutHistoryBlock__item')} key={item.id}>
                    <div className={cx('AboutHistoryBlock__textWrap')}>
                      <Heading className={cx('AboutHistoryBlock__subtitle')} level="3">
                        {HTMLParse(item.subtitle)}
                      </Heading>
                      <div className={cx('AboutHistoryBlock__description')}>
                        {HTMLParse(item.description)}
                      </div>
                    </div>
                    <div className={cx('AboutHistoryBlock__imageWrap')}>
                      <img
                        className={cx('AboutHistoryBlock__image')}
                        src={item.image}
                        alt={item.image}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={cx('AboutHistoryBlock__navigationWrap')}>
              <div className={cx('AboutHistoryBlock__arrowWrap')}>
                <Arrow
                  className={cx(
                    'AboutHistoryBlock__arrow',
                    'AboutHistoryBlock__arrow_prev',
                    currentSlide == 0
                      ? `${cx('AboutHistoryBlock__arrow_disabled')}`
                      : `${cx('AboutHistoryBlock__arrow_prev')}`,
                  )}
                  type="left"
                />
                <Arrow
                  className={cx('AboutHistoryBlock__arrow', 'AboutHistoryBlock__arrow_next')}
                  type="right"
                />
              </div>
            </div>
            <div className={cx('AboutHistoryBlock__swiper-pagination')}></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutHistoryBlock;
