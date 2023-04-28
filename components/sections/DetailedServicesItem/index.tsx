import React, { useEffect, useState, useRef } from 'react';

import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

import HTMLParse from 'react-html-parser';

import Container from 'components/environment/Container';
import Heading from 'components/environment/Heading';
import Arrow from 'components/environment/Arrow';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type MainBlockItems = {
  id: number | string;
  image: string;
};

type DetailedServicesItemStructures = {
  description: string[] | string;
  id: number | string;
};

interface DetailedServicesItemProps {
  items: Array<MainBlockItems>;
  url: string;
  title: string;
  serviceId: string;
  descriptionItems: Array<DetailedServicesItemStructures>;
}

const DetailedServicesItem: React.FC<DetailedServicesItemProps> = ({
  items,
  url,
  title,
  serviceId,
  descriptionItems,
}) => {
  const swiperRef = useRef<Swiper | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    if (items.length > 2) {
      swiperRef.current = new Swiper(`.${cx('DetailedServicesItem__items')}`, {
        loop: false,
        slidesPerView: 'auto',
        slideClass: cx('DetailedServicesItem__item'),
        wrapperClass: cx('DetailedServicesItem__itemsWrap'),
        navigation: {
          prevEl: `.${cx('DetailedServicesItem__arrow_prev')}`,
          nextEl: `.${cx('DetailedServicesItem__arrow_next')}`,
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
  }, [items]);
  return (
    <div className={cx('DetailedServicesItem')}>
      <Container className={cx('DetailedServicesItem__container')}>
        <a href={url} className={cx('DetailedServicesItem__breadcrumbWrap')}>
          <Arrow
            className={cx(
              'DetailedServicesItem__arrow',
              'DetailedServicesItem__arrowSingle',
              'DetailedServicesItem__arrow_prev',
            )}
            type="left"
          />
          <div className={cx('DetailedServicesItem__breadcrumbText')}>Все услуги</div>
        </a>

        <div className={cx('DetailedServicesItem__contentWrap')}>
          <div className={cx('DetailedServicesItem__content')}>
            <div className={cx('DetailedServicesItem__items')}>
              <div className={cx('DetailedServicesItem__itemsWrap')}>
                {items.map((item) => (
                  <div className={cx('DetailedServicesItem__item')} key={item.id}>
                    <div className={cx('DetailedServicesItem__imageWrap')}>
                      <img
                        className={cx('DetailedServicesItem__image')}
                        src={item.image}
                        alt={item.image}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={cx('DetailedServicesItem__navigationWrap')}>
              <div className={cx('DetailedServicesItem__navigation')}>
                <div className={cx('DetailedServicesItem__navigation_currentSlide')}>
                  {currentSlide + 1}
                </div>
                <div className={cx('DetailedServicesItem__navigation_allSlides')}>
                  /{items.length}
                </div>
              </div>
              <div className={cx('DetailedServicesItem__arrowWrap')}>
                <Arrow
                  className={cx(
                    'DetailedServicesItem__arrow',
                    'DetailedServicesItem__arrow_prev',
                    currentSlide == 0
                      ? `${cx('DetailedServicesItem__arrow_disabled')}`
                      : `${cx('DetailedServicesItem__arrow_prev')}`,
                  )}
                  type="left"
                />
                <Arrow
                  className={cx('DetailedServicesItem__arrow', 'DetailedServicesItem__arrow_next')}
                  type="right"
                />
              </div>
            </div>
          </div>
          <div className={cx('DetailedServicesItem__content')}>
            <div className={cx('DetailedServicesItem__serviceId')}>{serviceId}</div>
            <div className={cx('DetailedServicesItem__titleWrap')}>
              <Heading className={cx('DetailedServicesItem__title')} level="3">
                {HTMLParse(title)}
              </Heading>
            </div>
            <div className={cx('DetailedServicesItem__descriptionWrap')}>
              {descriptionItems.map((descriptionItem) => (
                <div
                  className={cx(
                    'DetailedServicesItem__description',
                    descriptionItem.description == undefined
                      ? 'DetailedServicesItem__descriptionNone'
                      : 'DetailedServicesItem__description',
                  )}
                  key={descriptionItem.id}
                >
                  {descriptionItem.description}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailedServicesItem;
