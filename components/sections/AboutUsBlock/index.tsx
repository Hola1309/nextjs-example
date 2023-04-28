import React, { useEffect, useState, useRef } from 'react';

import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

import Button from '../../environment/Button/index';
import Arrow from 'components/environment/Arrow';
import Container from 'components/environment/Container';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
import HtmlParser from 'react-html-parser';

const cx = cn.bind(styles);

type MainBlockItems = {
  id: number | string;
  image: string;
  imageRGB: string;
  imageID: number | string;
};

type MainBlockAchievements = {
  id: number | string;
  image: string;
  image1: string;
};

interface AboutUsBlockProps {
  title: string;
  items: Array<MainBlockItems>;
  achievements: Array<MainBlockAchievements>;
  policyTitle: string;
  policy: string;
  baseStratTitle: string;
  baseStrat: string;
}

const AboutUsBlock: React.FC<AboutUsBlockProps> = ({
  title,
  items,
  achievements,
  policyTitle,
  policy,
  baseStratTitle,
  baseStrat,
}) => {
  const swiperRef = useRef<Swiper | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    swiperRef.current = new Swiper(`.${cx('AboutUsBlock__achievements')}`, {
      loop: false,
      slidesPerView: 'auto',
      slideClass: cx('AboutUsBlock__achievement'),
      wrapperClass: cx('AboutUsBlock__achievementsWrap'),
      navigation: {
        prevEl: `.${cx('AboutUsBlock__arrow_prev')}`,
        nextEl: `.${cx('AboutUsBlock__arrow_next')}`,
      },
      on: {
        slideChange: (swiper) => {
          setCurrentSlide(swiper.realIndex);
        },
      },
      observer: true,
    });

    return () => {
      if (swiperRef && swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [achievements]);

  const [activeTab, setActiveTab] = useState('tab1');
  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };
  const handleTab3 = () => {
    setActiveTab('tab3');
  };

  return (
    <div className={cx('AboutUsBlock')}>
      <Container className={cx('Header__container')}>
        <div className={cx('AboutUsBlock__titleWrap')}>
          <h1 id="anchor" className={cx('AboutUsBlock__title')}>
            {title}
          </h1>
        </div>
        <div className={cx('AboutUsBlock__contentWrap')}>
          <div className={cx('AboutUsBlock__content')}>
            <div className={cx('AboutUsBlock__tabs')}>
              <div
                className={cx(
                  'AboutUsBlock__tabsWrap',
                  'tab1',
                  activeTab === 'tab1'
                    ? 'AboutUsBlock__tabsWrap_active'
                    : 'AboutUsBlock__tabsWrap_inActive',
                )}
                onClick={handleTab1}
              >
                <Button theme="noBorder" className={cx('AboutUsBlock__button')}>
                  Партнеры и заказчики
                </Button>
              </div>
              <div
                className={cx(
                  'AboutUsBlock__tabsWrap',
                  'tab2',
                  activeTab === 'tab2'
                    ? 'AboutUsBlock__tabsWrap_active'
                    : 'AboutUsBlock__tabsWrap_inActive',
                )}
                onClick={handleTab2}
              >
                <Button theme="noBorder" className={cx('AboutUsBlock__button')}>
                  Достижения и награды
                </Button>
              </div>
              <div
                className={cx(
                  'AboutUsBlock__tabsWrap',
                  'tab3',
                  activeTab === 'tab3'
                    ? 'AboutUsBlock__tabsWrap_active'
                    : 'AboutUsBlock__tabsWrap_inActive',
                )}
                onClick={handleTab3}
              >
                <Button theme="noBorder" className={cx('AboutUsBlock__button')}>
                  Социальная ответственность
                </Button>
              </div>
            </div>
          </div>

          <div className={cx('AboutUsBlock__content')}>
            <div className={cx('AboutUsBlock__tabContent')}>
              <div
                className={cx('AboutUsBlock__items', activeTab === 'tab1' ? 'active' : 'inactive')}
              >
                <div className={cx('AboutUsBlock__itemsWrap')}>
                  {items.map((item) => (
                    <div className={cx('AboutUsBlock__item')} key={item.id}>
                      <div className={cx('AboutUsBlock__imageWrap')}>
                        <img
                          className={cx('AboutUsBlock__image')}
                          src={item.image}
                          alt={item.image}
                        />
                        <img
                          className={cx('AboutUsBlock__imageTop')}
                          src={item.imageRGB}
                          alt={item.image}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={cx(
                  'AboutUsBlock__achievements',
                  activeTab === 'tab2' ? 'active' : 'inactive',
                )}
              >
                <div className={cx('AboutUsBlock__achievementsWrap')}>
                  {achievements.map((achievement) => (
                    <div className={cx('AboutUsBlock__achievement')} key={achievement.id}>
                      <div className={cx('AboutUsBlock__achievementImageWrap')}>
                        <img
                          className={cx('AboutUsBlock__achievementImage')}
                          src={achievement.image}
                        />
                        <img
                          className={cx('AboutUsBlock__achievementImage')}
                          src={achievement.image1}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className={cx('AboutUsBlock__navigationBlock')}>
                  <div className={cx('AboutUsBlock__navigationWrap')}>
                    <div className={cx('AboutUsBlock__navigation')}>
                      <div className={cx('AboutUsBlock__navigation_currentSlide')}>
                        {currentSlide + 1}
                      </div>
                      <div className={cx('AboutUsBlock__navigation_allSlides')}>
                        /{items.length}
                      </div>
                    </div>
                    <div className={cx('AboutUsBlock__arrowWrap')}>
                      <Arrow
                        className={cx('AboutUsBlock__arrow', 'AboutUsBlock__arrow_prev')}
                        type="left"
                      />
                      <Arrow
                        className={cx('AboutUsBlock__arrow', 'AboutUsBlock__arrow_next')}
                        type="right"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={cx('AboutUsBlock__policy', activeTab === 'tab3' ? 'active' : 'inactive')}
              >
                <div className={cx('AboutUsBlock__policyTitle')}>{policyTitle}</div>
                <div className={cx('AboutUsBlock__policyDesc')}>{HtmlParser(policy)}</div>
                <div className={cx('AboutUsBlock__policyTitle')}>{baseStratTitle}</div>
                <div className={cx('AboutUsBlock__policyDesc')}>{HtmlParser(baseStrat)}</div>
                <div className={cx('AboutUsBlock__buttonWrap')}>
                  <Button theme="noBorder" className={cx('AboutUsBlock__button')}>
                    Подробнее
                  </Button>
                </div>
              </div>
              <div
                className={cx('AboutUsBlock__policy', activeTab === 'tab4' ? 'active' : 'inactive')}
              >
                <div className={cx('AboutUsBlock__policyTitle')}>{policyTitle}</div>
                <div className={cx('AboutUsBlock__policyDesc')}>{HtmlParser(policy)}</div>
                <div className={cx('AboutUsBlock__buttonWrap')}>
                  <Button theme="noBorder" className={cx('AboutUsBlock__button')}>
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsBlock;
