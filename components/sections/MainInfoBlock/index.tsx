import React from 'react';

import Container from 'components/environment/Container';
import Quotes from 'images/icons/quotes.svg';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

interface MainInfoBlockProps {
  image: string;
  quote: string;
  title: string;
  subtitle: string;
}

const MainInfoBlock: React.FC<MainInfoBlockProps> = ({ image, title, subtitle }) => {
  return (
    <div className={cx('MainInfoBlock')}>
      <Container className={cx('MainInfoBlock__container')}>
        <div className={cx('MainInfoBlock__contentWrap')}>
          <div className={cx('MainInfoBlock__content')}>
            <div className={cx('MainInfoBlock__imageWrap')}>
              <img className={cx('MainInfoBlock__image')} src={image} alt={image} />
            </div>
          </div>
          <div className={cx('MainInfoBlock__content')}>
            <div className={cx('MainInfoBlock__quotes')}>
              <Quotes />
            </div>
            <div
              className={cx('MainInfoBlock__quote')}
              dangerouslySetInnerHTML={{
                __html:
                  '<strong>В своих взаимоотношениях с заказчиком мы стремимся к прозрачности отношений на всех уровнях и честному ведению бизнеса. </strong>',
              }}
            ></div>
            <div className={cx('MainInfoBlock__quote')}>
              В своих взаимоотношениях с заказчиком мы стремимся к прозрачности отношений на всех
              уровнях и честному ведению бизнеса. География поставок продукции ООО «Самараволгомаш»
              уже достаточно широка. Наши шаровые краны и пневмогидравлические приводы отлично
              зарекомендовали себя на крупнейших месторождениях нефти и газа России: Уренгойском,
              Ямбургском, Заполярном, Чаяндинском, Бованенковском, Южно-Русском, Песцовом,
              Западно-Салымском, Ванкорском, Оренбургском и др.
            </div>
            <div className={cx('MainInfoBlock__quote')}>
              Совершенствование действующих на предприятии процессов, внедрение инноваций, кадровый
              и производственный потенциал – все это позволяет нам с уверенным оптимизмом смотреть в
              будущее и быть готовыми к новым вызовам, покорению новых стратегических высот. За
              нашими успехами стоит главное – доверие наших заказчиков и партнеров.
            </div>
            <div className={cx('MainInfoBlock__quote')}>
              <div>
                <div className={cx('MainInfoBlock__title')}>{title}</div>
                <div className={cx('MainInfoBlock__subtitle')}>{subtitle}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainInfoBlock;
