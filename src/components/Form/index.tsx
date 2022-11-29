import React from 'react';
import Button from './components/Button';

class Form extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor='exercise'>

                    </label>
                    <input 
                        type="text"
                        name="exercise"
                        id="exercise"
                        placeholder="What's the exercise you'll be doing?"
                        required/>
                </div>
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
                <div>

                </div>
                <Button/>
            </form>
        )
    }
}

export default Form;