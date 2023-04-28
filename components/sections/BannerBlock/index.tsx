import React from 'react';

import HTMLParse from 'react-html-parser';
import Heading from 'components/environment/Heading';
import Container from 'components/environment/Container';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

interface BannerBlockProps {
  title: string;
  image: string;
  wideTitle?: boolean;
}

const BannerBlock: React.FC<BannerBlockProps> = ({ title, wideTitle = false }) => {
  return (
    <div className={cx('BannerBlock')}>
      <Container className={cx('BannerBlock__container')}>
        <div className={cx('BannerBlock__titleWrap')}>
          <Heading
            className={cx('BannerBlock__title', { BannerBlock__wideTitle: wideTitle })}
            level="2"
          >
            {HTMLParse(title)}
          </Heading>
        </div>

        <div className={cx('BannerBlock__items')}></div>
      </Container>
    </div>
  );
};

export default BannerBlock;
