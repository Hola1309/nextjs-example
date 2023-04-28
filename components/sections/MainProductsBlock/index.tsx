import React from 'react';

import Container from 'components/environment/Container';
import MainProductsItem, { MainProductsItemProps } from 'components/sections/MainProductsItem';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

interface MainProductsBlockProps {
  items: Array<MainProductsItemProps>;
  disabledTitle?: boolean;
  title: string;
  className?: string;
}

const MainProductsBlock: React.FC<MainProductsBlockProps> = ({ title, disabledTitle, items }) => {
  return (
    <div className={cx('MainProductsBlock', disabledTitle && 'MainProductsBlock__noMargin')}>
      <Container className={cx('MainProductsBlock__container')}>
        <div
          className={cx('MainProductsBlock__titleWrap', {
            MainProductsBlock__noTitleWrap: disabledTitle,
          })}
        >
          <h1 className={cx('MainProductsBlock__title')}>{title}</h1>
        </div>
        <div className={cx('MainProductsBlock__itemWrap')}>
          {items.map((item) => (
            <MainProductsItem
              key={item.productName}
              className={cx('MainProductsBlock__item')}
              {...item}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MainProductsBlock;
