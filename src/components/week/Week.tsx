import React from 'react';
import Styles from './Week.module.css';
import _ from 'lodash';

interface dayMinMax {
  Day: string;
  Min: number;
  Max: number;
}

interface week {
  semana: dayMinMax[];
}

export function Week(props: week) {
  return (
    _.map(props.semana, (day: dayMinMax, index: number) => {
      return (
        <div key={index} className={Styles.infoDay}>
          <strong>{day.Day}</strong>
          <span>
            <p>{day.Min}º</p>
            <p>{day.Max}º</p>
          </span>
        </div>
      );
    })
  );
}