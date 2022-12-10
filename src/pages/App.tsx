import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { IExercise } from '../types/exercise';
import style from './App.module.scss';

function App() {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [selected, setSelected] = useState<IExercise>();

  function selectExercise(selectedExercise: IExercise) {
    setSelected(selectedExercise);
    setExercises(oldExercises => oldExercises.map(exercise => ({
      ...exercise,
      selected: exercise.id === selectedExercise.id ? true : false
    })));
  }

  function exerciseFinish() {
    if (selected) {
      setSelected(undefined);
      setExercises(oldExercises => oldExercises.map(exercise => {
        if (exercise.id === selected.id) {
          return {
            ...exercise,
            selected: false,
            completed: true
          }
        }
        return exercise;
      }))
    }
  }

  return (
    //The below solution before the Stopwatch component call is not the best one. To have an interesting workaround it needs to consider global management.
    <div className={style.AppStyle}>
      <Form setExercises={setExercises} />
      <List
        exercises={exercises}
        selectExercise={selectExercise} />
      <Stopwatch
        selected={selected}
        exerciseFinish={exerciseFinish} />
    </div>
  );
}

export default App;
