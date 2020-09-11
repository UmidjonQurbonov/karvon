import React from 'react'
import st from './personal.module.scss'
import cx from 'classnames'


const Personal = () => {



    return (
        <div className={cx(st.personal)}>
            <form>
                <div className={cx('row')}>
                    <div className={cx('col-md-6 my-2')}>
                        <div className={cx('form-group')}>
                            <label className={cx(st.label)}>Имя пользователя</label>
                            <input type="text" className={cx(st.input, 'form-control')} placeholder="Напишите здесь" required/>  
                        </div>
                    </div>
                    <div className={cx('col-md-6 my-2')}>
                        <div className={cx('form-group')}>
                            <label className={cx(st.label)}>Электронная почта</label>
                            <input type="email" className={cx(st.input, 'form-control')} placeholder="Напишите здесь" required/>  
                        </div>
                    </div>
                    <div className={cx('col-md-6 my-2')}>
                        <div className={cx('form-group')}>
                            <label className={cx(st.label)}>Номер телефона</label>
                            <input type="text" className={cx(st.input, 'form-control')} placeholder="Напишите здесь" required/>  
                        </div>
                    </div>
                    <div className={cx('col-md-6 my-2')}>
                        <div className={cx('form-group')}>
                            <label className={cx(st.label)}>Введите адрес</label>
                            <select className={cx(st.select)} required>
                                <option className={cx(st.select_selected)} value="">Введите</option>
                                <option value="" className={cx(st.option)}>Узбекистан</option>
                                <option value="" className={cx(st.option)}>Россия</option>
                                <option value="" className={cx(st.option)}>Казахстан</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('col-md-6 my-2')}>
                        <div className={cx('form-group')}>
                            <label className={cx(st.label)}>Область</label>
                            <select className={cx(st.select)} required>
                                <option className={cx(st.select_selected)} value="">Введите</option>
                                <option value="" className={cx(st.option)}>Ташкент</option>
                                <option value="" className={cx(st.option)}>Фаргона</option>
                                <option value="" className={cx(st.option)}>Андижон</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('col-md-6 my-2')}>
                        <div className={cx('form-group')}>
                            <label className={cx(st.label)}>Город или район</label>
                            <select className={cx(st.select)} required>
                                <option className={cx(st.select_selected)} value="">Введите</option>
                                <option value="" className={cx(st.option)}>Юнусабадский</option>
                                <option value="" className={cx(st.option)}>Сергели</option>
                                <option value="" className={cx(st.option)}>Чилонзор</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('col-md-6 my-2')}>
                        <div className={cx('form-group')}>
                            <label className={cx(st.label)}>Пароль</label>
                            <input type="password" className={cx(st.input, 'form-control')} placeholder="Введите ваш пароль" required/>  
                        </div>
                    </div>
                    <div className={cx('col-md-6 my-2')}>
                        <div className={cx('form-group')}>
                            <label className={cx(st.label)}>Подтвердите пароль</label>
                            <input type="password" className={cx(st.input, 'form-control')} placeholder="Введите ваш пароль" required/>  
                        </div>
                    </div>
                    <div className={cx('col-12')}>
                        <div className="form-check my-2">
                            <input className={cx("form-check-input",st.check)} type="checkbox" value="" id="defaultCheck" required />
                            <label className={("form-check-label", st.check_label)} htmlFor="defaultCheck">
                                Я согласен с условиями использования сайта
                            </label>
                        </div>
                    </div>
                    <div className={cx('mt-5 col-12')}>
                        <input type="submit" value="Регистрация" className={cx(st.submit)} />
                    </div>
                </div>      
            </form>
        </div>
    );
}

export default Personal;