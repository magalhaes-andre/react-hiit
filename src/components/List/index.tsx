import React from 'react';
import './style.scss';

//Function Component --> After React 18, Function components are able to maintain state TODO: Research more on it and add to Readme.MD
function List() {
    const exercises = [{
        id: 1,
        name: "Chest",
        time: "00:04:00"
    }, {
        id: 2,
        name: "Triceps",
        time: "00:03:00"
    
    }, {
        id: 3,
        name: "Quadriceps",
        time: "00:02:00"
    }]
    //TODO: Study difference between using {} or () inside arrow function and how this would affect scope or not.
    //TODO: Study aside tag
    //Dynamic renders need to have keys as in li
    return (
        <aside className='exerciseList'>
            <h2> Today's Exercises </h2>
            <ul>
                {exercises.map((exercise, index) => (
                    <li key={exercise.id} className='item'>
                        <h3> {exercise.name} </h3>
                        <span> {exercise.time} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;