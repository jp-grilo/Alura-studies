import React, { useState } from "react";
import Item from './Item'
import style from './list.module.scss';

function List(){
    const [tarefas, setTarefas] = useState(
        [{
            tarefa: 'React',
            tempo: '02:00:00'
        }, {
            tarefa: 'JS',
            tempo: '01:00:00'
        }, {
            tarefa: 'TS',
            tempo: '03:00:00'
        }]
    )

    return(
        <aside className={style.taskList}>
            <h2 onClick={() => {
                setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}]);
            }}
            
            > Estudos do dia</h2>
            <ul >
                {tarefas.map((item, index) => (
                    <Item 
                    key={index}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;