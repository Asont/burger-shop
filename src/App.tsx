import React from 'react';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import style from '../src/App.module.scss'
import {Categories} from "./components/Categories";

function App() {
  return (
    <div className={style.container}>
      <Header/>
        <Categories/>
        <Main/>
    </div>
  );
}

export default App;
