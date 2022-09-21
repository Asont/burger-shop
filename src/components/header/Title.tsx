import React from 'react';
import style from './Title.module.scss'

type TitleType ={
    title:string,
    description:string
}

export const Title:React.FC<TitleType> = ({title,description}) => {
    return (
        <div className={style.titleContainer}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.description}>{description}</p>
        </div>
    );
};
