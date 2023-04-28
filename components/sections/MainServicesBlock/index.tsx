import React from 'react';

import Button from '../../environment/Button/index';
import Container from 'components/environment/Container';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type MainServicesBlockItems = {
  id: number | string;
  image: string;
  description: string;
};

interface MainServicesBlockProps {
  items: Array<MainServicesBlockItems>;
  title: string;
}

const MainServicesBlock: React.FC<MainServicesBlockProps> = ({ title, items }) => {
  return (
    <div className={cx('MainServicesBlock')}>
      <Container className={cx('MainServicesBlock__container')}>
        <div className={cx('MainServicesBlock__titleWrap')}>
          <h1 className={cx('MainServicesBlock__title')}>{title}</h1>
        </div>
        <div className={cx('MainServicesBlock__itemWrap')}>
          {items.map((item) => (
            <div className={cx('MainServicesBlock__item')} key={item.id}>
              <div className={cx('MainServicesBlock__imageWrap')}>
                <img className={cx('MainServicesBlock__image')} src={item.image} alt={item.image} />
              </div>
              <div className={cx('MainServicesBlock__description')}>{item.description}</div>
              <div className={cx('MainServicesBlock__buttonWrap')}>
                <Button theme="noBorder" className={cx('MainServicesBlock__button')}>
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MainServicesBlock;
