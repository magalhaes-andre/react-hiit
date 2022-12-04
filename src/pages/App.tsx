import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import { Stopwatch } from '../components/Stopwatch';
import { IExercise } from '../types/exercise';
import style from './App.module.scss';

function App() {
  const [exercises, setExercises] = useState<IExercise[]>([{
    name: "Chest",
    time: "00:04:00"
  }, {
    name: "Triceps",
    time: "00:03:00"

  }, {
    name: "Quadriceps",
    time: "00:02:00"
  }]);
  return (
    <div className={style.AppStyle}>
      <Form setExercises={setExercises}/>
      <List exercises={exercises} />
      <Stopwatch />
    </div>
  );
}

export default App;
