import React from 'react';

import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

import Container from 'components/environment/Container';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

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
};

interface MainAboutBlockProps {
  title: string;
  items: Array<MainBlockItems>;
  achievements: Array<MainBlockAchievements>;
  policyTitle: string;
  policy: string;
}

const MainAboutBlock: React.FC<MainAboutBlockProps> = ({ title, items }) => {
  return (
    <div className={cx('MainAboutBlock')}>
      <Container className={cx('Header__container')}>
        <div className={cx('MainAboutBlock__titleWrap')}>
          <h1 className={cx('MainAboutBlock__title')}>{title}</h1>
        </div>
        <div className={cx('MainAboutBlock__contentWrap')}>
          <div className={cx('MainAboutBlock__content')}>
            <div className={cx('MainAboutBlock__tabContent')}>
              <div className={cx('MainAboutBlock__items')}>
                <div className={cx('MainAboutBlock__itemsWrap')}>
                  {items.map((item) => (
                    <div className={cx('MainAboutBlock__item')} key={item.id}>
                      <div className={cx('MainAboutBlock__imageWrap')}>
                        {/* <img 
                        className={cx('MainAboutBlock__image')}
                        src={item.image}
                        alt={item.image}
                        /> */}
                        <img
                          // className={cx('MainAboutBlock__imageTop')}
                          src={item.imageRGB}
                          alt={item.image}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className={cx('MainAboutBlock__achievements')}>
                <div className={cx('MainAboutBlock__navigationBlock')}>
                  <div className={cx('MainAboutBlock__navigationWrap')}>
                    <div className={cx('MainAboutBlock__navigation')}>
                      <div className={cx('MainAboutBlock__navigation_allSlides')}>
                        /{items.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainAboutBlock;
