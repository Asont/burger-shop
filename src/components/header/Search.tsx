import React from 'react';
import style from './Search.module.scss'

export const Search = () => {
    return (
        <div className={style.navContainer}>
            <div className={style.textField}>
                <input className={style.textFieldInput} type="text" placeholder="Search burger"/>
            </div>
        </div>
    );
};
