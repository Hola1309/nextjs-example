import React from 'react';

import HTMLParse from 'react-html-parser';

import Heading from 'components/environment/Heading';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type NomenclatureProductsItemConnections = {
  connection: string[] | string;
  id: number | string;
};

export interface NomenclatureProductsItemProps {
  titleArray: string[];
  productName: string;
  productSize: string;
  productSizes: string;
  productPressure: string;
  productPressures: string;
  productConnection: string;
  productConnections: Array<NomenclatureProductsItemConnections>;
  className?: string;
}

const NomenclatureProductsItem: React.FC<NomenclatureProductsItemProps> = ({
  productName,
  productSize,
  productSizes,
  productPressure,
  productPressures,
  productConnection,
  productConnections,
}) => {
  return (
    <div className={cx('NomenclatureProductsItem')}>
      <div className={cx('NomenclatureProductsItem__contentWrap')}>
        <div className={cx('NomenclatureProductsItem__infoWrap')}>
          <div className={cx('NomenclatureProductsItem__content')}>
            <Heading className={cx('NomenclatureProductsItem__productTitle')} level="2">
              {HTMLParse(productName)}
            </Heading>
          </div>

          <div className={cx('NomenclatureProductsItem__content')}>
            <div className={cx('NomenclatureProductsItem__productCell')}>
              <div
                className={cx(
                  'NomenclatureProductsItem__productItem',
                  'NomenclatureProductsItem__productSize',
                )}
              >
                {productSize}
              </div>
              <div className={cx('NomenclatureProductsItem__productSizes')}>{productSizes}</div>
            </div>
            <div className={cx('NomenclatureProductsItem__productCell')}>
              <div
                className={cx(
                  'NomenclatureProductsItem__productItem',
                  'NomenclatureProductsItem__productPressure',
                )}
              >
                {productPressure}
              </div>
              <div className={cx('NomenclatureProductsItem__productPressures')}>
                {productPressures}
              </div>
            </div>
            <div className={cx('NomenclatureProductsItem__productCell')}>
              <div
                className={cx(
                  'NomenclatureProductsItem__productItem',
                  'NomenclatureProductsItem__productConnection',
                )}
              >
                {productConnection}
              </div>
              <div className={cx('NomenclatureProductsItem__productConnectionWrap')}>
                {productConnections.map((connections) => (
                  <div
                    className={cx(
                      'NomenclatureProductsItem__productConnections',
                      connections.connection == undefined
                        ? 'NomenclatureProductsItem__productConnectionsNone'
                        : 'NomenclatureProductsItem__productConnections',
                    )}
                    key={connections.id}
                  >
                    {connections.connection}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NomenclatureProductsItem;
