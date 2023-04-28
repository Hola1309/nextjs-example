import React from 'react';

import HTMLParse from 'react-html-parser';

import Container from 'components/environment/Container';
import Heading from 'components/environment/Heading';
import Tabs from 'components/environment/Tabs';
import Tab from 'components/environment/Tab';

import NomenclatureProductsItem, {
  NomenclatureProductsItemProps,
} from 'components/sections/NomenclatureProductsItem';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

interface NomenclatureProductsBlockProps {
  items: Array<NomenclatureProductsItemProps>;
  title: string;
  className?: string;
}

const NomenclatureProductsBlock: React.FC<NomenclatureProductsBlockProps> = ({ title, items }) => {
  return (
    <div className={cx('NomenclatureProductsBlock')}>
      <Container className={cx('NomenclatureProductsBlock__container')}>
        <div className={cx('NomenclatureProductsBlock__titleWrap')}>
          <Heading className={cx('NomenclatureProductsBlock__title')} level="2">
            {HTMLParse(title)}
          </Heading>
        </div>

        <div className={cx('NomenclatureProductsBlock__contentWrap')}>
          <Tabs className={cx('NomenclatureProductsBlock__tabsWrap')}>
            {items.map((item) => (
              <Tab title={item.titleArray} key={item.productName}>
                <NomenclatureProductsItem
                  className={cx('NomenclatureProductsItem__item')}
                  {...item}
                />
              </Tab>
            ))}
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default NomenclatureProductsBlock;
