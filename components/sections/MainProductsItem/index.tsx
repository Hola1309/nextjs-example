import React from 'react';

import Link from 'next/link';
import HtmlParser from 'react-html-parser';

import Button from '../../environment/Button/index';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type MainProductsItemTypes = {
  type: string[] | string;
  id: number | string;
};

type MainProductsItemStructures = {
  structure: string[] | string;
  id: number | string;
};

export interface MainProductsItemProps {
  productTypes: Array<MainProductsItemTypes>;
  productStructures: Array<MainProductsItemStructures>;
  id: number | string;
  productId: string;
  productName: string;
  productUsage: string;
  productUsages: string;
  productStructure?: string;
  productType?: string;
  image: string;
  imageSwipe: string;
  url: string;
  className?: string;
  classNameProduct: string;
}

const MainProductsItem: React.FC<MainProductsItemProps> = ({
  productName,
  productUsage,
  productUsages,
  url,
  className,
}) => {
  return (
    <div className={cx(className)}>
      <div className={cx('MainProductsItem__infoWrap')}>
        <h2 className={cx('MainProductsItem__productName')}>{HtmlParser(productName)}</h2>
        <div className={cx('MainProductsItem__productUsage')}>{productUsage}</div>
        <div className={cx('MainProductsItem__productUsages')}>{productUsages}</div>
        <div className={cx('MainProductsItem__buttonWrap')}>
          <Link href={url}>
            <div className={cx('MainProductsItem__button')}>
              <Button theme="noBorder" className={cx('MainProductsItem__button')}>
                Подробнее
              </Button>
            </div>
          </Link>
        </div>
      </div>

      <div className={cx('MainProductsItem__imageWrap')}>
        <img
          className={cx('MainProductsItem__img')}
          src="/assets/images/main/product-1.png"
          onMouseOver={(e) => (e.currentTarget.src = '/assets/images/main/product-2.png')}
          onMouseOut={(e) => (e.currentTarget.src = '/assets/images/main/product-1.png')}
        />
      </div>
    </div>
  );
};

export default MainProductsItem;
