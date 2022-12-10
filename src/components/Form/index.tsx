import React, { SetStateAction, useState } from 'react';
import Button from '../Button';
import style from './Form.module.scss'
import { IExercise } from '../../types/exercise'
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setExercises: React.Dispatch<React.SetStateAction<IExercise[]>>
}

export default function Form({ setExercises }: Props) {
    const [name, setExercise] = useState("");
    const [time, setTime] = useState("00:00");

    function addExercise(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setExercises(oldExercises =>
            [
                ...oldExercises,
                {
                    name,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        )
        setExercise("");
        setTime("00:00");
    }

    return (
        /*  this.function.bind is needed in order to React be able to pass the state into the addExercise fucntion. 
            This is due to scope limitations in class components. -> 
            This is not needed anymore due to moving into function component. 
            TODO: Study why.
        */
        <form className={style.newExercise} onSubmit={addExercise}>
            <div className={style.inputContainer}>
                <label htmlFor='exercise'>
                    Add Your Next Exercise
                </label>
                <input
                    type="text"
                    name="exercise"
                    value={name}
                    onChange={event => { setExercise(event.target.value) }}
                    id="exercise"
                    placeholder="What's the exercise you'll be doing?"
                    required />
            </div>
            <div className={style.inputContainer}>
                <label>
                    Time
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    value={time}
                    onChange={event => { setTime(event.target.value) }}
                    id="time"
                    min="00:00:00"
                    max="01:30:00" />
            </div>
            <Button
                text="Add"
                type="submit" />
        </form>
    )
}