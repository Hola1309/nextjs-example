import React from 'react';

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

const DetailedNewsItem2: React.FC<DetailedNewsItemProps> = ({
  url,
  title,
  section,
  date,
  eventItems,
}) => {
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
        <div className={cx('DetailedNewsItem__sectionWrap')}>
          <div className={cx('DetailedNewsItem__section')}>{section}</div>
          <div className={cx('DetailedNewsItem__date')}>{date}</div>
        </div>

        <div className={cx('DetailedNewsItem__contentWrap')}>
          <div className={cx('DetailedNewsItem__infoWrap')}>
            <div className={cx('DetailedNewsItem__content')}>
              <div className={cx('DetailedNewsItem__eventsWrap')}>
                {eventItems.map((eventItem) => (
                  <div className={cx('DetailedNewsItem__eventWrap')} key={eventItem.id}>
                    <div className={cx('DetailedNewsItem__eventDescription')}>
                      {eventItem.description}
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

export default DetailedNewsItem2;
