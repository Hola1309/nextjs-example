import React, { ComponentType } from 'react';

import cn from 'classnames/bind';
import styles from './styles.module.scss';
const cx = cn.bind(styles);

interface HeadingProps {
  level?: number | string;
  className?: string;
  children: React.ReactNode;
  noTransfrom?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  level = 1,
  className,
  children,
  noTransfrom = false,
}) => {
  let Tag: ComponentType | keyof JSX.IntrinsicElements = 'h1';

  switch (+level) {
    case 2: {
      Tag = 'h2';
      break;
    }

    case 3: {
      Tag = 'h3';
      break;
    }

    case 4: {
      Tag = 'h4';
      break;
    }

    default: {
      Tag = 'h1';
    }
  }

  return (
    <Tag
      className={cx(
        'Heading',
        `Heading_level-${level}`,
        { Heading_notransform: noTransfrom },
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
