import ITarefa from '../../../types/tarefas';
import style from '../list.module.scss';

interface Props extends ITarefa{
    selectTask : (taskSelected:ITarefa) => void 
}


export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selectTask
    }:Props){
    return(
        <li 
            className={style.item} 
            onClick={() => selectTask(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}