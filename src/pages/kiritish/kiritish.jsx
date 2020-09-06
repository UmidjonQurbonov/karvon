import React, { useState, useEffect } from 'react'
import st from './kiritish.module.scss'
import cx from 'classnames'

import img from '../../img/atlas.jpg'

const Kiritish = () => {

    const [text, setText] = useState('');
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if(text.length < 500){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    })

    const categori = [
        {text:'Телефон и аксессуары', value:""},
        {text:'Компьютер и оргтехника', value:""},
        {text:'Электроника', value:""},
        {text:'Бытовая техника', value:''},
        {text:'Бижутерия и часы', value:''},
        {text:'Сумки и обувь', value:''},
        {text:'Дом и зотовари',value:''},
        {text:'Красота и здоровье', value:''},
        {text:'Спорт и развлечение', value:''}
    ]

    const options = categori.map((i, index) => (
        <option className={cx(st.option)} value={i.value} key={index}>{i.text}</option>
    ))

    console.log(text);
    return (
       <div className={cx(st.kiritish)}>
           <div className={cx('container')}>
                <div className={cx(st.box)}>
                    <img src={img} alt="" className={cx('w-100')}/>
                </div>
                <div className={cx(st.content)}>
                    <form action="">
                        <div className={cx('row')}>
                            <div className={cx('col-sm-6 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>Введите  название продукта</label>
                                    <input type="text" placeholder="Напишите здесь" className={cx(st.input, 'form-control')} required/>
                                </div>
                            </div>
                            <div className={cx('col-sm-6 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>Основная картина</label>
                                    <input type="file" className={cx(st.input,st.file_input,'form-control')}/>
                                </div>
                            </div>
                            <div className={cx('col-sm-6 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>Цена продукты</label>
                                    <input type="text" placeholder="Напишите здесь" className={cx(st.input, 'form-control')} required/>
                                </div>
                            </div>
                            <div className={cx('col-sm-6 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>Дополнительные фото</label>
                                    <input type="file" className={cx(st.input,st.file_input,'form-control')}/>
                                </div>
                            </div>
                            <div className={cx('col-sm-6 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>Тип продукта</label>
                                    <input type="text" placeholder="Напишите здесь" className={cx(st.input, 'form-control')} required/>
                                </div>
                            </div>
                            <div className={cx('col-sm-6 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>Категория</label>
                                    <select className={cx(st.select)} required>
                                        <option className={cx(st.disable)} value="" disabled selected>Выберите категорию</option>
                                        {options}
                                    </select>
                                </div>
                            </div>
                            <div className={cx('col-sm-12 my-2')}>
                                <div className={cx('form-group')}>
                                    <label className={cx(st.label)}>Добавить дополнительную информацию</label>
                                    <textarea disabled={disabled} placeholder="Напишите здесь" className={cx('form-control', st.input)} onChange={(event) => setText(event.target.value)} rows="7" >
                                    </textarea>
                                    <p className={cx(st.hisoblagich)}>
                                        <span className={cx(st.hisoblagich_span)}>{text.length}/500</span>
                                    </p>
                                </div>
                            </div>
                            <div className={cx('my-3 col-sm-12')}>
                                <input type="submit" value="Сохранить" className={cx(st.button)} />
                            </div>
                        </div>
                    </form>
                </div>
           </div>
       </div> 
    );
}

export default Kiritish;