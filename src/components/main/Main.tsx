import React from 'react';
import style from './Main.module.scss'
import {Item} from "./Item";
import burgerImg from '../../assets/burgerImg/burger-01.png'

export const Main = () => {
    return (
        <div className={style.container}>
            <Item category={1} img={burgerImg} description={'dsds'} name={'CRISPY CHICKEN'}/>
            <Item category={1} img={burgerImg} description={'dsds'} name={'Burger'}/>
            <Item category={1} img={burgerImg} description={'dsds'} name={'Burger'}/>
            <Item category={1} img={burgerImg} description={'dsds'} name={'Burger'}/>
            <Item category={1} img={burgerImg} description={'dsds'} name={'Burger'}/>
        </div>
    );
};
