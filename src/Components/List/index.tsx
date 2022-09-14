import Item from './Item'
import style from './list.module.scss';
import ITarefa from '../../types/tarefas';

interface Props{
    tarefas : ITarefa[],
    selectTask : (taskSelected:ITarefa) => void  
}


function List({ tarefas, selectTask } : Props){
    

    return(
        <aside className={style.taskList}>
            <h2> Estudos do dia</h2>
            <ul >
                {tarefas.map((item) => (
                    <Item 
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;