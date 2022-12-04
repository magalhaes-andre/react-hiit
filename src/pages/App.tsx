import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import { Stopwatch } from '../components/Stopwatch';
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

  return (
    //The below solution before the Stopwatch component call is not the best one. To have an interesting workaround it needs to consider global management.
    <div className={style.AppStyle}>
      <Form setExercises={setExercises}/>
      <List 
        exercises={exercises}
        selectExercise={selectExercise} />
      <Stopwatch />
    </div>
  );
}

export default App;
