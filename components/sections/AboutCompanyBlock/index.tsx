import React, { useEffect, useState } from 'react';

import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

import Container from 'components/environment/Container';
import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type AboutBlockItems = {
  id: number | string;
  number: string;
  description: string;
};

type AboutBlockLinks = {
  id: number | string;
  index: string;
  title: string;
  ref: string;
};

type SliderItems = {
  id: number | string;
  image: string;
};

interface AboutCompanyBlockProps {
  title: string;
  items: Array<AboutBlockItems>;
  links: Array<AboutBlockLinks>;
  sliderItems: Array<SliderItems>;
  description: string;
  descriptionSecond: string;
  image: string;
  image1: string;
}

const AboutCompanyBlock: React.FC<AboutCompanyBlockProps> = ({ title }) => {
  const [AboutCompanyBlockNew, setAboutCompanyBlockNew] = useState([{ id: 1, number: '', disc: '', q:title }]);

  useEffect(() => {
    fetch('/apiaboutUsNumberBlockViewSet/?format=json')
      .then(response => response.json())
      .then(commits => setAboutCompanyBlockNew(commits))
  }, []);
  return (
    <div className={cx('AboutCompanyBlock')}>
      <Container className={cx('AboutCompanyBlock__container')}>
        <div className={cx('AboutCompanyBlock__contentWrap')}>
          <div className={cx('AboutCompanyBlock__content')}>
            {AboutCompanyBlockNew.map((item) => (
              <div className={cx('AboutCompanyBlock__textWrap')} key={item.id}>
                <div className={cx('AboutCompanyBlock__numberWrap')}>
                  <h3 className={cx('AboutCompanyBlock__number')}>{item.number}</h3>
                  <span className={cx('AboutCompanyBlock__underline')}></span>
                </div>
                <div className={cx('AboutCompanyBlock__fact')}>{item.disc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutCompanyBlock;
