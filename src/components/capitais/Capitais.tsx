import React from 'react';
import _ from 'lodash';
import Styles from './Capitais.module.css';

interface infoCapital {
  Min: number;
  Max: number;
  City: string;
}

const capitais = [
  { Min: 18, Max: 27, City: 'Rio de Janeiro' },
  { Min: 14, Max: 22, City: 'São Paulo' },
  { Min: 21, Max: 32, City: 'Belo Horizonte' },
  { Min: 24, Max: 37, City: 'Brasilia' },
  { Min: 24, Max: 37, City: 'Belém' },
]

export function Capitais() {
  return (
    <div className={Styles.capitais}>
      <h2>Capitais</h2>
      <div className={Styles.capInfo}>
        <table>
          <thead>
            <tr>
              <td>min</td>
              <td>Max</td>
            </tr>
          </thead>
          <tbody>
            {_.map(capitais, (cap, index: number) => {
              return (
                <tr key={index}>
                  <td>{cap.Min}º</td>
                  <td>{cap.Max}º</td>
                  <td>{cap.City}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <td>min</td>
              <td>Max</td>
            </tr>
          </thead>
          <tbody>
            {_.map(capitais, (cap, index) => {
              return (
                <tr key={index} >
                  <td>{cap.Min}º</td>
                  <td>{cap.Max}º</td>
                  <td>{cap.City}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}