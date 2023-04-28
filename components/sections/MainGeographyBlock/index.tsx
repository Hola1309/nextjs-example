import React from 'react';

import Container from 'components/environment/Container';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type MainGeographyBlockAbout = {
  id: number | string;
  quantity: string;
  about: string;
};

type MainGeographyBlockItems = {
  id: number | string;
  name: string;
  quantity: string;
};

interface MainGeographyBlockProps {
  blocks: Array<MainGeographyBlockAbout>;
  items: Array<MainGeographyBlockItems>;
  title: string;
  description: string;
}

const MainGeographyBlock: React.FC<MainGeographyBlockProps> = ({ title, description }) => {
  return (
    <div className={cx('MainGeographyBlock')}>
      <Container className={cx('MainGeographyBlock__container')}>
        <div className={cx('MainGeographyBlock__titleWrap')}>
          <h1 className={cx('MainGeographyBlock__title')}>{title}</h1>
          <div className={cx('MainGeographyBlock__description')}>{description}</div>
        </div>
      </Container>
    </div>
  );
};

export default MainGeographyBlock;
