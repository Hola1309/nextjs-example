import React, { useEffect, useRef, useState } from 'react';

import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);
import Container from 'components/environment/Container';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type MainBlockAchievements = {
  id: number | string;
  image: string;
  description: string;
};

interface AboutPotentialBlockProps {
  title: string;
  description: string;
  subtitle: string;
  achievements: Array<MainBlockAchievements>;
}

const AboutPotentialBlock: React.FC<AboutPotentialBlockProps> = ({ achievements }) => {
  const swiperRef = useRef<Swiper | null>(null);
  
  const [AboutPotentialBlockNew, setAboutPotentialBlockNew] = useState([{ id: 1, title: '', disc: '',sliderList:[{id: '', imgupload: '',disc:''}]}]);

  useEffect(() => {
    fetch('/apiaboutUsSecondBlockViewSet/?format=json&id=1')
      .then(response => response.json())
      .then(commits => setAboutPotentialBlockNew(commits))
  }, []);
  useEffect(() => {
    swiperRef.current = new Swiper(`.${cx('AboutPotentialBlock__achievements')}`, {
      loop: false,
      slidesPerView: 'auto',
      slideClass: cx('AboutPotentialBlock__achievement'),
      wrapperClass: cx('AboutPotentialBlock__achievementsWrap'),
      navigation: {
        prevEl: `.${cx('AboutPotentialBlock__arrow_prev')}`,
        nextEl: `.${cx('AboutPotentialBlock__arrow_next')}`,
      },

      observer: true,
    });

    return () => {
      if (swiperRef && swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [achievements]);

  return (
    <div className={cx('AboutPotentialBlock')}>
      <Container className={cx('Header__container')}>
        <div className={cx('AboutPotentialBlock__contentWrap')}>
          <div className={cx('AboutPotentialBlock__content')}></div>
          <div className={cx('AboutPotentialBlock__content')}>
            <div className={cx('AboutPotentialBlock__navigationBlock')}>
              <div className={cx('AboutPotentialBlock__navigationTitleWrap')}>
                <div className={cx('AboutPotentialBlock__navigationTitle')}>{AboutPotentialBlockNew[0].title}</div>
              </div>
            </div>
            <div className={cx('AboutPotentialBlock__achievements')}>
              <div className={cx('AboutPotentialBlock__achievementsWrap')}>
                {AboutPotentialBlockNew[0].sliderList.map((achievement) => (
                  <div className={cx('AboutPotentialBlock__achievement')} key={achievement.id}>
                    <div className={cx('AboutPotentialBlock__achievementImageWrap')}>
                      <img
                        className={cx('AboutPotentialBlock__achievementImage')}
                        src={achievement.imgupload}
                        alt={achievement.imgupload}
                      />
                    </div>
                    <div className={cx('AboutPotentialBlock__achievementDescription')}>
                      {achievement.disc}
                    </div>
                  </div>
                ))}
              </div>
              <div className={cx('AboutPotentialBlock__description')}>{AboutPotentialBlockNew[0].disc}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPotentialBlock;
