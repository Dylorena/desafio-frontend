import React from 'react';
import styles from './input.module.css';

export function Search(props) {
  return (
    <div id="divSearch" className={styles.divSearch}>
      <input className={styles.input} type="text" placeholder="Insira aqui o nome da cidade" onChange={props.onChange} />
      <button onClick={props.onClick} className={styles.button}>
        <img src="/img/procurar.svg" alt="Procurar cidade" />
      </button>
    </div>
  )
}
