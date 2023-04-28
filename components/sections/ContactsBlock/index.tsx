import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import Container from 'components/environment/Container';
import Docs from 'images/icons/pdf.svg';
import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

interface ContactsBlockProps {
  title: string;
  address: string;
}

const ContactsBlock: React.FC<ContactsBlockProps> = ({ title, address }) => {
  return (
    <div className={cx('ContactsBlock')}>
      <Container className={cx('ContactsBlock__container')}>
        <div className={cx('ContactsBlock__titleWrap')}>
          <h1 className={cx('ContactsBlock__title')}>{title}</h1>
        </div>
        <div className={cx('ContactsBlock__contentWrap')}>
          <div className={cx('ContactsBlock__content')}>
            <div className={cx('ContactsBlock__infoBlock')}>
              <div className={cx('ContactsBlock__subtitle')}>Адрес</div>
              <div className={cx('ContactsBlock__info')}>
                <div className={cx('ContactsBlock__info__value')}>{address}</div>
              </div>
            </div>
            <div className={cx('ContactsBlock__infoBlock')}>
              <div className={cx('ContactsBlock__subtitle')}>Приемная Генерального директора</div>
              <div className={cx('ContactsBlock__infoWrap')}>
                <div className={cx('ContactsBlock__description')}>
                  <div className={cx('ContactsBlock__info__value')}>+7 846 309-07-47</div>
                </div>
                <div className={cx('ContactsBlock__description')}>
                  <div className={cx('ContactsBlock__info__value')}>+7 846 309-23-08</div>
                </div>
                <div className={cx('ContactsBlock__description')}>
                  <div className={cx('ContactsBlock__info__value')}>mail@samaravolgomash.ru</div>
                </div>
              </div>
            </div>
            <div className={cx('ContactsBlock__infoBlock')}>
              <div className={cx('ContactsBlock__subtitle')}>Служба продаж и маркетинга</div>
              <div className={cx('ContactsBlock__infoWrap')}>
                <div className={cx('ContactsBlock__description')}>
                  <div className={cx('ContactsBlock__info__value')}>+7 846 309-02-47</div>
                </div>
                <div className={cx('ContactsBlock__description')}>
                  <div className={cx('ContactsBlock__info__value')}>+7 846 309-22-47</div>
                </div>
                <div className={cx('ContactsBlock__description')}>
                  <div className={cx('ContactsBlock__info__value')}>
                    svmsales@samaravolgomash.ru
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('ContactsBlock__infoBlock')}>
              <div className={cx('ContactsBlock__subtitle')}></div>
              <div className={cx('ContactsBlock__infoWrap', 'ContactsBlock__iconWrap')}>
                <div className={cx('ContactsBlock__icon')}>
                  <Docs />
                </div>
                <div
                  className={cx('ContactsBlock__description', 'ContactsBlock__descriptionScheme')}
                >
                  Схема проезда
                </div>
              </div>
            </div>
          </div>
          <div className={cx('ContactsBlock__mapWrap')}>
            <YMaps>
              <Map
                defaultState={{
                  center: [53.143712, 50.053517],
                  zoom: 15,
                }}
                width={660}
                height={449}
                className={cx('ContactsBlock__map')}
              >
                <Placemark
                  geometry={[53.143712, 50.053517]}
                  options={{
                    hasHint: true,
                    hasBaloon: true,
                  }}
                  modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                  properties={{
                    balloonContentHeader: 'Самараволгомаш',
                    balloonContentBody: 'ул. Белорусская, 88',
                    hintContent: 'Самараволгомаш',
                  }}
                />
              </Map>
            </YMaps>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactsBlock;
