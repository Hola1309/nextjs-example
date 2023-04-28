import React from 'react';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);
import 'swiper/swiper-bundle.css';

import HTMLParse from 'react-html-parser';

import Container from 'components/environment/Container';
import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type MainBannerItems = {
  id: number | string;
  image: string;
};

interface MainBannerSliderProps {
  title: string;
  description: string;
  items: Array<MainBannerItems>;
}

const MainBannerSlider: React.FC<MainBannerSliderProps> = ({ title }) => {
  return (
    <div className={cx('MainBannerSlider')}>
      <Container className={cx('MainBannerSlider__container')}>
        <div className={cx('MainBannerSlider__contentWrap')}>
          <h1 className={cx('MainBannerSlider__title')}>{HTMLParse(title)}</h1>
        </div>

        <video
          className={cx('MainBannerSlider__video')}
          src="/assets/images/main/videoplayback.mp4"
          muted
          autoPlay={true}
          loop
        >
          {' '}
        </video>
      </Container>
    </div>
  );
};

export default MainBannerSlider;
