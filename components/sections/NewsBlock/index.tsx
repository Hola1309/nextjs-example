import React from 'react';

import Link from 'next/link';

import Button from '../../environment/Button/index';
import Container from 'components/environment/Container';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

type NewsBlockItems = {
  id: number | string;
  section: string;
  date: string;
  image?: string;
  title: string;
  description?: string;
  url: string;
};

interface NewsBlockProps {
  items: Array<NewsBlockItems>;
  title: string;
}

const NewsBlock: React.FC<NewsBlockProps> = ({ title, items }) => {
  return (
    <div className={cx('NewsBlock')}>
      <Container className={cx('NewsBlock__container')}>
        <div className={cx('NewsBlock__titleWrap')}>
          <h1 className={cx('NewsBlock__title')}>{title}</h1>
        </div>
        <div className={cx('NewsBlock__itemWrap')}>
          {items.map((item) => (
            <Link href={item.url} key={item.id}>
              <div className={cx('NewsBlock__item')}>
                {item.id == 0 ? (
                  <>
                    <div className={cx('NewsBlock__imageWrap')}>
                      <img
                        className={cx('NewsBlock__imageBig')}
                        src={item.image}
                        alt={item.image}
                      />
                    </div>
                    <div className={cx('NewsBlock__textWrap')}>
                      <div className={cx('NewsBlock__infoWrap')}>
                        <div className={cx('NewsBlock__section')}>{item.section}</div>
                        <div className={cx('NewsBlock__date')}>{item.date}</div>
                      </div>
                      <div className={cx('NewsBlock__newsTitle')}>{item.title}</div>
                      <div className={cx('NewsBlock__subtitle')}>{item.description}</div>
                      <div className={cx('NewsBlock__firstButtonWrap')}>
                        <Button theme="noBorder" className={cx('Button')}>
                          Подробнее
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={cx('NewsBlock__infoWrap')}>
                      <div className={cx('NewsBlock__section')}>{item.section}</div>
                      <div className={cx('NewsBlock__date')}>{item.date}</div>
                    </div>
                    <div className={cx('NewsBlock__imageWrap')}>
                      <img className={cx('NewsBlock__image')} src={item.image} alt={item.image} />
                    </div>
                    <div className={cx('NewsBlock__newsTitle')}>{item.title}</div>
                    <div className={cx('NewsBlock__subtitle')}>{item.description}</div>
                    <div className={cx('NewsBlock__buttonWrap')}>
                      <Button theme="noBorder" className={cx('Button')}>
                        Подробнее
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className={cx('NewsBlock__ButtonWrap')}>
          <Button theme="wBorder" className={cx('Button')}>
            показать еще
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NewsBlock;
