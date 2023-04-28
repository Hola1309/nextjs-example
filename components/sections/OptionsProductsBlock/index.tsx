import React from 'react';

import HTMLParse from 'react-html-parser';

import Container from 'components/environment/Container';
import Heading from 'components/environment/Heading';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type OptionsProductsBlockItemProps = {
  id: number | string;
  subtitle: string;
};

interface OptionsProductsBlockProps {
  items: Array<OptionsProductsBlockItemProps>;
  title: string;
  className?: string;
}

const OptionsProductsBlock: React.FC<OptionsProductsBlockProps> = ({ title, items }) => {
  return (
    <div className={cx('OptionsProductsBlock')}>
      <Container className={cx('OptionsProductsBlock__container')}>
        <div className={cx('OptionsProductsBlock__titleWrap')}>
          <Heading className={cx('OptionsProductsBlock__title')} level="2">
            {HTMLParse(title)}
          </Heading>
        </div>

        <div className={cx('OptionsProductsBlock__contentWrap')}>
          {items.map((item) => (
            <div className={cx('OptionsProductsBlock__content')} key={item.id}>
              <div className={cx('OptionsProductsBlock__subtitle')}>{item.subtitle}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OptionsProductsBlock;
