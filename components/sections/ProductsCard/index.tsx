import React from 'react';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
import Arrow from 'components/environment/Arrow';

const cx = cn.bind(styles);

export interface MainProductsItemProps {
  productName: string;
  productUsage: string;
  productUsages: string;
  image: string;
  className?: string;
  classNameProduct: string;
}

const ProductionCard: React.FC<MainProductsItemProps> = ({
  productName,
  productUsage,
  productUsages,
  classNameProduct,
  className,
}) => {
  return (
    <>
      <a href="/products" className={cx('DetailedProductsItem__arrowWrap')}>
        <Arrow
          className={cx('DetailedProductsItem__arrow', 'DetailedProductsItem__arrow_prev')}
          type="left"
        />
        <div className={cx('DetailedProductsItem__breadcrumbText')}>Серийная продукция</div>
      </a>
      <div className={cx(className)}>
        <div className={cx('MainProductsItem__infoWrap')}>
          <h2 className={cx('MainProductsItem__productName')}>{productName}</h2>
          <div className={cx('MainProductsItem__productUsage')}>{productUsage}</div>
          <div className={cx('MainProductsItem__productUsages')}>{productUsages}</div>
        </div>

        <div className={cx('MainProductsItem__imageWrap')}>
          <div className={cx(classNameProduct)}></div>
        </div>
      </div>
    </>
  );
};

export default ProductionCard;
