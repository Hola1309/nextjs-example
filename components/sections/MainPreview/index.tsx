import React from 'react';

import Arrow from 'components/environment/Arrow';
import Button from '../../environment/Button/index';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

interface MainPreviewProps {
  title: string;
}

const MainPreview: React.FC<MainPreviewProps> = ({ title }) => {
  return (
    <div className={cx('MainPreview')}>
      {title}
      <div className={cx('ButtonWrap')}>
        <Button theme="wBorder" className={cx('Button')}>
          Подробнее
        </Button>
      </div>
      <div className={cx('ButtonWrap')}>
        <Button theme="noBorder" className={cx('Button')}>
          Подробнее
        </Button>
      </div>
      <div className={cx('Arrow__navigation')}>
        <Arrow className={cx('Arrow')} type="left" />
        <Arrow className={cx('Arrow')} type="right" />
      </div>
    </div>
  );
};

export default MainPreview;
