import React, {useState} from 'react';
import style from './Item.module.scss'

type ItemType = {
    img: string
    name: string,
    category: number,
    description: string,
    sizes: string[]
    types: number[]
}

export const Item: React.FC<ItemType> = ({img, name, category, description, sizes, types}) => {

    const [counter, setCounter] = useState(0)
    const [type, setType] = useState(0)
    const [size, setSize] = useState(0)

    const onClickHandler = () => {
        setCounter(counter + 1)
    }
    const onClickChangeType = (num:number)=>{
        setType(num)
    }
    const onClickChangeSize = (num:number)=>{
        setSize(num)
    }

    return (
        <div className={style.container}>
            <img src={img} alt={'img'}/>
            <h3>{name}</h3>
            <div className={style.conteinerForTypesAndSizes}>
                <div className={style.containerForTypes}>
                    {types.map((i, index) => {
                        return <p className={type===index?`${style.activeType}`: `${null}`} key={index}  onClick={()=>onClickChangeType(index)}>{i}</p>
                    })}
                </div>
                <div className={style.sizes}>
                    {sizes.map((sizes, index) => {
                        return <span className={size===index?`${style.activeSize}`: `${null}`} key={index}  onClick={()=>onClickChangeSize(index)}>{sizes}</span>
                    })}
                </div>
            </div>
            <p>{description}</p>
            <button className={style.btn} onClick={onClickHandler}>{counter}</button>
        </div>
    );
};
