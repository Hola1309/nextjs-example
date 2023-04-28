import React, { useState } from 'react';

import HTMLParse from 'react-html-parser';

import Container from 'components/environment/Container';
import Heading from 'components/environment/Heading';
import Button from 'components/environment/Button';

import cn from 'classnames/bind';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

interface CareerVacancyFormProps {
  title: string;
  description: string;
  email: string;
  phone: string;
  formTitle: string;
  className?: string;
}

const CareerVacancyForm: React.FC<CareerVacancyFormProps> = ({
  title,
  description,
  email,
  phone,
  formTitle,
}) => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className={cx('CareerVacancyForm')}>
      <Container className={cx('CareerVacancyForm__container')}>
        <div className={cx('CareerVacancyForm__contentWrap')}>
          <div className={cx('CareerVacancyForm__content')}>
            <div className={cx('CareerVacancyForm__titleWrap')}>
              <Heading className={cx('CareerVacancyForm__title')} level="3">
                {HTMLParse(title)}
              </Heading>
              <div className={cx('CareerVacancyForm__description')}>{description}</div>
            </div>

            <div className={cx('CareerVacancyForm__subtitle')}>
              E-MAIL
              <div className={cx('CareerVacancyForm__email')}>{email}</div>
            </div>
            <div className={cx('CareerVacancyForm__subtitle')}>
              ТЕЛЕФОН
              <div className={cx('CareerVacancyForm__phone')}>{phone}</div>
            </div>
          </div>
          <div className={cx('CareerVacancyForm__content')}>
            <div className={cx('CareerVacancyForm__formTitleWrap')}>
              <Heading className={cx('CareerVacancyForm__title')} level="3">
                {HTMLParse(formTitle)}
              </Heading>
            </div>
            <form className={cx('CareerVacancyForm__form')}>
              <div className={cx('CareerVacancyForm__fields')}>
                <input
                  className={cx('CareerVacancyForm__input')}
                  type="email"
                  placeholder="Ваше имя"
                />
                <input
                  className={cx('CareerVacancyForm__input')}
                  type="email"
                  placeholder="Ваш e-mail"
                />
                <input
                  className={cx('CareerVacancyForm__input')}
                  type="tel"
                  placeholder="Ваш номер"
                />
                <input className={cx('CareerVacancyForm__input')} type="file" />
                <textarea
                  className={cx('CareerVacancyForm__inputBig')}
                  placeholder="Текст сообщения"
                />
              </div>
              <div className={cx('CareerVacancyForm__checkboxWrap')}>
                <input
                  className={cx('CareerVacancyForm__checkbox')}
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                <div className={cx('CareerVacancyForm__checkboxText')}>
                  Даю согласие на обработку и хранение своих персональных данных и соглашаюсь с
                  Политикой конфиденциальности
                </div>
              </div>
            </form>
            <div className={cx('CareerVacancyForm__buttonWrap')}>
              <Button theme="wBorder" className={cx('CareerVacancyForm__button')}>
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CareerVacancyForm;
