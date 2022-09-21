import React from 'react';
import style from './Item.module.scss'

type ItemType = {
    img:string
    name:string,
    category:number,
    description:string,
}

export const Item:React.FC<ItemType> = ({img,name,category,description}) => {
    return (
        <div className={style.container}>
            <img src={img} alt={'img'}/>
            <h3>{name}</h3>
            <p>{category}</p>
            <p>{description}</p>
        </div>
    );
};
