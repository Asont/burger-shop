import React from 'react';
import style from './Main.module.scss'
import {Item} from "./Item";
import burgerItems from '../../assets/burger.json'

export const Main = () => {

    const birgerItem = burgerItems.map((i, index) => {
        return (
            <Item category={i.category} img={i.imageUrl} description={i.description} name={i.title} key={index} sizes={i.sizes}/>
        )
    })

    return (
        <div className={style.container}>
            {birgerItem}
        </div>
    );
};
