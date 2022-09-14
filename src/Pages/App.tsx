import React, { useState } from 'react';
import Form from '../Components/Form';
import List from '../Components/List';
import Stopwatch from '../Components/Stopwatch';
import ITarefa from '../types/tarefas';
import style from './app.module.scss';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selected, setSelected] = useState<ITarefa>();

  function selectTask(taskSelected : ITarefa){
    setSelected(taskSelected);
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List 
      tarefas={tarefas}
      selectTask={selectTask}
      />
      <Stopwatch />
    </div>
  );
}

export default App;
