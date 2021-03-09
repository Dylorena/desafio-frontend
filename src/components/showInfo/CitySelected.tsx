import React from 'react';
import { Week } from '../week/Week';
import Styles from './CitySelected.module.css';

const week = [
  { Day: 'Terça', Min: 18, Max: 26 },
  { Day: 'Quarta', Min: 18, Max: 28 },
  { Day: 'Quinta', Min: 19, Max: 30 },
  { Day: 'Sexta', Min: 23, Max: 35 },
  { Day: 'Sábado', Min: 23, Max: 37 },
]

export function CitySelected(props) {
  return (
    <div className={Styles.CitySelected}>
      <div className={Styles.infoPrincipal}>
        <header>
          <strong>Niterói, RJ - Brasil</strong>
          <button onClick={props.closed}>X</button>
        </header>
        <h1>20ºC Nublado</h1>
        <div className={Styles.infoAdc}>
          <p>
            <img src="/img/seta-baixo.svg" alt="Temperatura mínima" /><strong>16º</strong>
            <img src="/img/seta-cima.svg" alt="Temperatura máxima" /><strong>25º</strong>
          </p>
          <p>Sensação<strong> 19º C</strong></p>
          <p>Vento <strong>18km/h</strong></p>
          <p>Humidade <strong>89%</strong></p>
        </div>
      </div>
      <div className={Styles.infoSemanal}>
        <Week semana={week} />
      </div>
    </div>
  )
}