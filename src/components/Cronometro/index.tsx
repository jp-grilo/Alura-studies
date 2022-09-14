import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import tempoParaSegundos from "../../common/utils/date";
import { useState } from "react";
import { ITarefa } from "../../types/tarefa";


interface Props{
  selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();
    if(selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
    }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      tempo:{tempo}
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao 
        text='Começar!'
        />
    </div>
  )
}