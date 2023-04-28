import React from 'react';
import Link from 'next/link';

import Container from 'components/environment/Container';
import Button from '../../environment/Button/index';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type DetailedDocsItems = {
  id: number | string;
  docsTitle: string;
  docsSize: string;
};

interface DetailedProductsItemProps {
  url: string;
  docsItems: Array<DetailedDocsItems>;
}

const DocsCard: React.FC<DetailedProductsItemProps> = ({ url, docsItems }) => {
  return (
    <div className={cx('DetailedProductsItem')}>
      <Container className={cx('DetailedProductsItem__container')}>
        <div className={cx('DetailedProductsItem__contentWrap')}>
          <div className={cx('DetailedProductsItem__docsWrap')}>
            <div className={cx('DetailedProductsItem__docsTitle')}>Документы</div>
            <div className={cx('DetailedProductsItem__docsList')}>
              {docsItems.map((docsItem) => (
                <div className={cx('DetailedProductsItem__docsItem')} key={docsItem.id}>
                  <div className={cx('DetailedProductsItem__docsIconWrap')}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_865_12134)">
                        <path
                          d="M20.9346 5.83087L15.3097 0.206016C15.1785 0.0746719 14.9993 0 14.8125 0H4.96875C3.80564 0 2.85938 0.946266 2.85938 2.10938V21.8906C2.85938 23.0537 3.80564 24 4.96875 24H19.0312C20.1944 24 21.1406 23.0537 21.1406 21.8906V6.32812C21.1406 6.13641 21.0601 5.95636 20.9346 5.83087ZM15.5156 2.40061L18.74 5.625H16.2188C15.831 5.625 15.5156 5.30958 15.5156 4.92188V2.40061ZM19.0312 22.5938H4.96875C4.58105 22.5938 4.26562 22.2783 4.26562 21.8906V2.10938C4.26562 1.72167 4.58105 1.40625 4.96875 1.40625H14.1094V4.92188C14.1094 6.08498 15.0556 7.03125 16.2188 7.03125H19.7344V21.8906C19.7344 22.2783 19.419 22.5938 19.0312 22.5938Z"
                          fill="#03439A"
                        />
                        <path
                          d="M16.2188 9.9375H7.78125C7.39294 9.9375 7.07812 10.2523 7.07812 10.6406C7.07812 11.0289 7.39294 11.3438 7.78125 11.3438H16.2188C16.6071 11.3438 16.9219 11.0289 16.9219 10.6406C16.9219 10.2523 16.6071 9.9375 16.2188 9.9375Z"
                          fill="#03439A"
                        />
                        <path
                          d="M16.2188 12.75H7.78125C7.39294 12.75 7.07812 13.0648 7.07812 13.4531C7.07812 13.8414 7.39294 14.1562 7.78125 14.1562H16.2188C16.6071 14.1562 16.9219 13.8414 16.9219 13.4531C16.9219 13.0648 16.6071 12.75 16.2188 12.75Z"
                          fill="#03439A"
                        />
                        <path
                          d="M16.2188 15.5625H7.78125C7.39294 15.5625 7.07812 15.8773 7.07812 16.2656C7.07812 16.6539 7.39294 16.9688 7.78125 16.9688H16.2188C16.6071 16.9688 16.9219 16.6539 16.9219 16.2656C16.9219 15.8773 16.6071 15.5625 16.2188 15.5625Z"
                          fill="#03439A"
                        />
                        <path
                          d="M13.4062 18.375H7.78125C7.39294 18.375 7.07812 18.6898 7.07812 19.0781C7.07812 19.4664 7.39294 19.7812 7.78125 19.7812H13.4062C13.7946 19.7812 14.1094 19.4664 14.1094 19.0781C14.1094 18.6898 13.7946 18.375 13.4062 18.375Z"
                          fill="#03439A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_865_12134">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className={cx('DetailedProductsItem__docsItemTitleWrap')}>
                    <div className={cx('DetailedProductsItem__docsItemTitle')}>
                      {docsItem.docsTitle}
                    </div>
                    <div className={cx('DetailedProductsItem__docsSize')}>{docsItem.docsSize}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href={url}>
              <div className={cx('DetailedProductsItem__buttonWrap')}>
                <Button theme="wBorder" className={cx('DetailedProductsItem__button')}>
                  ЗАПОЛНИТЬ ОПРОСНЫЙ ЛИСТ
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DocsCard;
