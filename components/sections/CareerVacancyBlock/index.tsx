import React from 'react';

import HTMLParse from 'react-html-parser';
import Link from 'next/link';

import Container from 'components/environment/Container';
import Heading from 'components/environment/Heading';
import Button from 'components/environment/Button';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type CareerVacancyBlockList = {
  id: number | string;
  itemTitle: string;
  itemName: string;
};

type CareerVacancyBlockItemProps = {
  id: number | string;
  subtitle: string;
  date: string;
  listItems: Array<CareerVacancyBlockList>;
  salary: string;
  url: string;
};

interface CareerVacancyBlockProps {
  items: Array<CareerVacancyBlockItemProps>;
  title: string;
  description: string;

  className?: string;
}

const CareerVacancyBlock: React.FC<CareerVacancyBlockProps> = ({ title, items }) => {
  return (
    <div className={cx('CareerVacancyBlock')}>
      <Container className={cx('CareerVacancyBlock__container')}>
        <div className={cx('CareerVacancyBlock__titleWrap')}>
          <Heading className={cx('CareerVacancyBlock__title')} level="3">
            {HTMLParse(title)}
          </Heading>
        </div>
        {/* <div className={cx('CareerVacancyBlock__description')}>{description}</div> */}

        <div className={cx('CareerVacancyBlock__contentWrap')}>
          {items.map((item) => (
            <div className={cx('CareerVacancyBlock__content')} key={item.id}>
              <div className={cx('CareerVacancyBlock__date')}>{item.date}</div>
              <div className={cx('CareerVacancyBlock__subtitle')}>{item.subtitle}</div>
              <div className={cx('CareerVacancyBlock__listWrapper')}>
                <div className={cx('CareerVacancyBlock__listWrap')}>
                  {item.listItems.map((listItem) => (
                    <div className={cx('CareerVacancyBlock__listBlock')} key={listItem.id}>
                      <div className={cx('CareerVacancyBlock__listItemTitle')}>
                        {listItem.itemTitle}
                      </div>
                      <div className={cx('CareerVacancyBlock__listItem')}>{listItem.itemName}</div>
                    </div>
                  ))}
                </div>
                <div className={cx('CareerVacancyBlock__listWrap')}>
                  <div className={cx('CareerVacancyBlock__listInfo')}>
                    <div className={cx('CareerVacancyBlock__salary')}>{item.salary}</div>
                    <Link href={item.url}>
                      <div className={cx('MainAboutBlock__buttonWrap')}>
                        <Button theme="wBorder" className={cx('MainAboutBlock__button')}>
                          Подробнее
                        </Button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CareerVacancyBlock;
