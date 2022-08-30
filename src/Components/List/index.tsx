import Item from './Item'
import style from './list.module.scss';
import ITarefa from '../../types/tarefas';


function List({tarefas} : {tarefas: ITarefa[]}){
    

    return(
        <aside className={style.taskList}>
            <h2> Estudos do dia</h2>
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