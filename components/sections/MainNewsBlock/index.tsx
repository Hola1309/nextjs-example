import React from 'react';

import Button from '../../environment/Button/index';
import Container from 'components/environment/Container';
import Link from 'next/dist/client/link';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type MainNewsBlockItems = {
  id: number | string;
  section: string;
  date: string;
  image?: string;
  title: string;
  ref: string;
  description?: string;
};

interface MainNewsBlockProps {
  items: Array<MainNewsBlockItems>;
  title: string;
}

const MainNewsBlock: React.FC<MainNewsBlockProps> = ({ title, items }) => {
  return (
    <div className={cx('MainNewsBlock')}>
      <Container className={cx('MainNewsBlock__container')}>
        <div className={cx('MainNewsBlock__titleWrap')}>
          <h1 className={cx('MainNewsBlock__title')}>{title}</h1>
          <Link href="/news">
            <div className={cx('MainNewsBlock__ButtonWrap')}>
              <Button theme="wBorder" className={cx('Button')}>
                все новости
              </Button>
            </div>
          </Link>
        </div>
        <div className={cx('MainNewsBlock__itemWrap')}>
          {items.map((item) => (
            <div className={cx('MainNewsBlock__item')} key={item.id}>
              <div className={cx('MainNewsBlock__infoWrap')}>
                <div className={cx('MainNewsBlock__section')}>{item.section}</div>
                <div className={cx('MainNewsBlock__date')}>{item.date}</div>
              </div>
              <div className={cx('MainNewsBlock__imageWrap')}>
                <img className={cx('MainNewsBlock__image')} src={item.image} alt={item.image} />
              </div>
              <div className={cx('MainNewsBlock__newsTitle')}>{item.title}</div>
              <div className={cx('MainNewsBlock__subtitle')}>{item.description}</div>
              <Link href={item.ref}>
                <div className={cx('MainNewsBlock__buttonWrap')}>
                  <Button theme="noBorder" className={cx('Button')}>
                    Подробнее
                  </Button>
                </div>
              </Link>
              <div className={cx('MainNewsBlock__row')}></div>
            </div>
          ))}
        </div>
        <div className={cx('MainNewsBlock__ButtonWrap__mob')}>
          <Button theme="wBorder" className={cx('Button')}>
            все новости
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default MainNewsBlock;
