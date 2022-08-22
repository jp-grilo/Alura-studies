import React from "react";
import './style.scss';

function List(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JS',
        tempo: '01:00:00'
    }, {
        tarefa: 'TS',
        tempo: '03:00:00'
    }]

    return(
        <aside className="taskList">
            <h2> Estudos do dia</h2>
            <ul >
                {tarefas.map((item, index) => (
                    <li key={index} className="item">
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;