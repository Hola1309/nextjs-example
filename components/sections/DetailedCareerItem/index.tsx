import React from 'react';

import HTMLParse from 'react-html-parser';

import Container from 'components/environment/Container';
import Heading from 'components/environment/Heading';
import Arrow from 'components/environment/Arrow';
import Button from 'components/environment/Button';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type DetailedCareerListItems = {
  listItem: string[] | string;
  id: number;
};

type DetailedCareerItems = {
  id: number | string;
  subtitle: string;
  list: Array<DetailedCareerListItems>;
};

interface DetailedCareerItemProps {
  url: string;
  date: string;
  title: string;
  address: string;
  salary: string;
  items: Array<DetailedCareerItems>;
}

const DetailedCareerItem: React.FC<DetailedCareerItemProps> = ({
  url,
  date,
  title,
  address,
  salary,
  items,
}) => {
  return (
    <div className={cx('DetailedCareerItem')}>
      <Container className={cx('DetailedCareerItem__container')}>
        <a href={url} className={cx('DetailedCareerItem__breadcrumbWrap')}>
          <Arrow
            className={cx(
              'DetailedCareerItem__arrow',
              'DetailedCareerItem__arrowSingle',
              'DetailedCareerItem__arrow_prev',
            )}
            type="left"
          />
          <div className={cx('DetailedCareerItem__breadcrumbText')}>Все вакансии</div>
        </a>

        <div className={cx('DetailedCareerItem__contentWrap')}>
          <div className={cx('DetailedCareerItem__content')}>
            <div className={cx('DetailedCareerItem__date')}>{date}</div>
          </div>
          <div className={cx('DetailedCareerItem__content')}>
            <div className={cx('DetailedCareerItem__infoWrap')}>
              <div className={cx('DetailedCareerItem__titleWrap')}>
                <Heading className={cx('DetailedCareerItem__title')} level="2">
                  {HTMLParse(title)}
                </Heading>
              </div>
              <div className={cx('DetailedCareerItem__addressWrap')}>
                Адрес
                <div className={cx('DetailedCareerItem__address')}>{address}</div>
              </div>
            </div>
            <div className={cx('DetailedCareerItem__infoWrap')}>
              <div className={cx('DetailedCareerItem__salary')}>{salary}</div>
              <div className={cx('DetailedCareerItem__buttonWrap')}>
                <Button theme="wBorder" className={cx('DetailedCareerItem__button')}>
                  откликнуться
                </Button>
              </div>
            </div>
          </div>
          <div className={cx('DetailedCareerItem__content')}>
            <div className={cx('DetailedCareerItem__items')}>
              <div className={cx('DetailedCareerItem__itemsWrap')}>
                {items.map((item) => (
                  <div className={cx('DetailedCareerItem__item')} key={item.id}>
                    <div className={cx('DetailedCareerItem__subtitle')}>{item.subtitle}</div>
                    <ul className={cx('DetailedCareerItem__list')}>
                      {item.list.map((listItem) => (
                        <li className={cx('DetailedCareerItem__listItem')} key={listItem.id}>
                          {listItem.listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailedCareerItem;
