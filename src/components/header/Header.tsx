import React from 'react';
import {Search} from "./Search";
import logo from '../../assets/logo.png'
import style from './Header.module.scss'
import {Title} from "./Title";

export const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.imgAndTitle}>
                <img className={style.img} src={logo} alt={'logo'}/>
                <Title title={'Burger now'} description={'Restaurant chain'}/>
            </div>
            <Search/>
            <button className={style.btn}>0$   |  0</button>
        </div>
    );
};

