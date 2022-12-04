import React from 'react';
import Button from '../Button';
import style from './Form.module.scss'

//Class Component
class Form extends React.Component {
    render() {
        return (
            <form className={style.newExercise}>
                <div className={style.inputContainer}>
                    <label htmlFor='exercise'>
                    Add Your Next Exercise
                    </label>
                    <input 
                        type="text"
                        name="exercise"
                        id="exercise"
                        placeholder="What's the exercise you'll be doing?"
                        required/>
                </div>
                <div className={style.inputContainer}>
                   <label>
                    Time
                   </label>
                    <input 
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"/>
                </div>
                <Button 
                    text="Add" />
            </form>
        )
    }
}

export default Form;