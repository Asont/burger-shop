import React, {useState} from 'react';
import style from './Item.module.scss'

type ItemType = {
    img:string
    name:string,
    category:number,
    description:string,
    sizes:string[]
}

export const Item:React.FC<ItemType> = ({img,name,category,description,sizes}) => {

    const [counter, setCounter] = useState(0)

    const onClickHandler = ()=>{
        setCounter(counter+1)
    }

    return (
        <div className={style.container}>
            <img src={img} alt={'img'}/>
            <h3>{name}</h3>
            <p>{category}</p>
            <div className={style.sizes}>
                {sizes.map((i)=>{
                   return <span>{i}</span>
                })}
        </div>
            <p>{description}</p>
            <button className={style.btn} onClick={onClickHandler}>{counter}</button>
        </div>
    );
};
