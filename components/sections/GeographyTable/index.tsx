import React from 'react';

import Container from 'components/environment/Container';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type MainGeographyBlockItems = {
  id: number | string;
  name: string;
};

interface MainGeographyBlockProps {
  items: Array<MainGeographyBlockItems>;
  description: string;
}

const GeographyTable: React.FC<MainGeographyBlockProps> = ({ items }) => {
  return (
    <div className={cx('GeographyTable')}>
      <Container className={cx('GeographyTable__container')}>
        <h2 className={cx('GeographyTable__title')}>Что отличает наше предприятие от других</h2>
        <div className={cx('GeographyTable__itemWrap')}>
          {items.map((item) => (
            <div className={cx('GeographyTable__item')} key={item.id}>
              <div className={cx('GeographyTable__name__Wrapp')}>
                <div className={cx('GeographyTable__name')}>{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default GeographyTable;
