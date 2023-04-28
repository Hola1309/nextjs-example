import React from 'react';

import HTMLParse from 'react-html-parser';

import Container from 'components/environment/Container';
import Heading from 'components/environment/Heading';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type ConstructionProductsBlockItemProps = {
  id: number | string;
  image: string;
  subtitle: string;
};

interface ConstructionProductsBlockProps {
  items: Array<ConstructionProductsBlockItemProps>;
  title: string;
}

const ConstructionProductsBlock: React.FC<ConstructionProductsBlockProps> = ({ title, items }) => {
  return (
    <div className={cx('ConstructionProductsBlock')}>
      <Container className={cx('ConstructionProductsBlock__container')}>
        <div className={cx('ConstructionProductsBlock__titleWrap')}>
          <Heading className={cx('ConstructionProductsBlock__title')} level="2">
            {HTMLParse(title)}
          </Heading>
        </div>

        <div className={cx('ConstructionProductsBlock__contentWrap')}>
          {items.map((item) => (
            <div className={cx('ConstructionProductsBlock__content')} key={item.id}>
              <div className={cx('ConstructionProductsBlock__imageWrap')}>
                <img
                  className={cx('ConstructionProductsBlock__image')}
                  src={item.image}
                  alt={item.image}
                />
              </div>
              <Heading className={cx('ConstructionProductsBlock__subtitle')} level="3">
                {item.subtitle}
              </Heading>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ConstructionProductsBlock;
