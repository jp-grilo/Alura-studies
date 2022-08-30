import React from 'react';
import Form from '../Components/Form';
import List from '../Components/List';
import Stopwatch from '../Components/Stopwatch';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
