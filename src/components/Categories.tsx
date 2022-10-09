import React, {useState} from 'react';
import style from './Categories.module.scss'

export const Categories = () => {

    const [active, setActive] = useState(0)

    const changeActiveCategory = (num:number) => {
        setActive(num)
    }

    const categories = ['all', 'with chicken', 'with beef', 'vegeterian']

    return (
        <div className={style.container}>
            {categories.map((category, index) => {
                return <div className={active===index? `${style.active}`:`${style.categoryStyle}`} onClick={()=>changeActiveCategory(index)} key={index}>{category}</div>
            })}
        </div>
    );
};
