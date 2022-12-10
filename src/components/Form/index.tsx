import { time } from 'console';
import React, { SetStateAction } from 'react';
import Button from '../Button';
import style from './Form.module.scss'
import { IExercise } from '../../types/exercise'
import { v4 as uuidv4 } from 'uuid';

//Class Component
class Form extends React.Component<{
    setExercises: React.Dispatch<React.SetStateAction<IExercise[]>>
}> {


    state = {
        name: "",
        time: "00:00"
    }

    //Function creation in class component
    addExercise(event: React.FormEvent) {
        event.preventDefault();
        this.props.setExercises(oldExercises =>
            [...oldExercises,
            {
                ...this.state,
                selected: false,
                completed: false,
                id: uuidv4()
            }
            ]
        )
        this.setState({
            name: "",
            time: "00:00"
        })
    }

    render() {
        return (
            //this.function.bind is needed in order to React be able to pass the state into the addExercise fucntion. This is due to scope limitations in class components.
            <form className={style.newExercise} onSubmit={this.addExercise.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='exercise'>
                        Add Your Next Exercise
                    </label>
                    <input
                        type="text"
                        name="exercise"
                        value={this.state.name}
                        onChange={event => { this.setState({ ...this.state, name: event.target.value }) }}
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
                        value={this.state.time}
                        onChange={event => { this.setState({ ...this.state, time: event.target.value }) }}
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
}

export default Form;