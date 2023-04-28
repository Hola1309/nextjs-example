import React from 'react';

import Link from 'next/link';
import HTMLParse from 'react-html-parser';

import Container from 'components/environment/Container';
import Heading from 'components/environment/Heading';
import Arrow from 'components/environment/Arrow';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type ServicesBlockItemProps = {
  id: number | string;
  url: string;
  subtitle: string;
};

interface ServicesBlockProps {
  items: Array<ServicesBlockItemProps>;
  title: string;
  className?: string;
}

const ServicesBlock: React.FC<ServicesBlockProps> = ({ title, items }) => {
  return (
    <div className={cx('ServicesBlock')}>
      <Container className={cx('ServicesBlock__container')}>
        <div className={cx('ServicesBlock__titleWrap')}>
          <Heading className={cx('ServicesBlock__title')} level="3">
            {HTMLParse(title)}
          </Heading>
        </div>

        <div className={cx('ServicesBlock__contentWrap')}>
          {items.map((item) => (
            <Link href={item.url} key={item.id}>
              <div className={cx('ServicesBlock__content')}>
                <div className={cx('ServicesBlock__subtitle')}>{item.subtitle}</div>
                <div className={cx('ServicesBlock__arrowWrap')}>
                  <Arrow
                    className={cx('ServicesBlock__arrow', 'ServicesBlock__arrow_next')}
                    type="right"
                    blue
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ServicesBlock;
