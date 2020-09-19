import React from 'react'
import st from './profil-change.module.scss'
import cx from 'classnames'


import avatar from '../../img/avatar.svg'

const ProfilChange = () => {
    
    const malumot = [
        {title: "Ism", value: "Xurshidbek", type: "text", col: 'col-md-6' },
        {title: "Email", value: "student@gmail.com", type: "email", col: 'col-md-6' },
        {title: "Familiya", value: "Ismatov", type: "text", col:'col-md-6'},
        {title: "Telefon", value: "+998994587465", type: "text", col: 'col-md-6' },
        {title: "Manzil", value: "Surxondaryo viloyati Sariosiyo tumani", type: "text", col: 'col-sm-12' },
    ]

    const parol = [
        {title: "Oldingi parol", type: 'password', value: 'kirma'},
        {title: "Yangi parol", type: 'password', value: 'kirma1996'},
        {title: "Parolni tasdiqlash", type: 'password', value: 'kirma1996'}
    ]

    const malumotlar = malumot.map((i, index) => (
        <div className={cx(`form-group my-3 ${i.col}`)} key={index}>
            <label className={cx(st.for_label)}>{i.title}</label>
            <input 
                type={i.type} 
                className={cx('form-control', st.for_input)}
                defaultValue={i.value} />
        </div>
    ))

    const parollar = parol.map((i, index) => (
        <div className={cx('form-group col-12 my-3')} key={index} >
            <label className={cx(st.for_label)}>{i.title}</label>
            <input type={i.type} className={cx('form-control', st.for_input)} defaultValue={i.value} />
        </div>
    ))

    return (
        <div className={cx(st.change)}>
            <form action="">
                <div className={cx('container')}>
                    <div className={cx(st.change_card)}>
                        <div className={cx(st.header)}>
                            <h1 className={cx(st.header_title)}>profilni o'zgartirish</h1>
                            <input type="submit" className={cx(st.header_button)} value="Saqlash" />
                        </div>
                        <div className={cx(st.content)}>
                            <div className={cx(st.image, 'my-3')}>
                                <img src={avatar} alt="" className={cx(st.image_img)} />
                                <input type="file" id="img" className={cx(st.image_input)}/>
                                <label htmlFor="img" className={cx(st.image_label)}>
                                    <i className={cx('fa fa-camera', st.image_icon)}></i>
                                </label>
                            </div>
                            <div className={cx(st.for, '')}>
                                <div className={cx('row')}>
                                    <div className={cx('col-lg-8')}>
                                        <div className={cx('row')}>
                                            {malumotlar}
                                        </div>
                                    </div>
                                    <div className={cx('col-lg-4')}>
                                        <div className={cx('row')}>
                                            { parollar }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProfilChange;