import style from './List.module.scss';
import Item from './Item'
import { IExercise } from '../../types/exercise'

//Function Component --> After React 18, Function components are able to maintain state TODO: Research more on it and add to Readme.MD
function List({ exercises }: { exercises: IExercise[] }) {
    //Hook for setting the state with useState() usage. TODO: Read more on React Hooks.

    //TODO: Study difference between using {} or () inside arrow function and how this would affect scope or not.
    //TODO: Study aside tag
    //Dynamic renders need to have keys as in li
    return (
        <aside className={style.exerciseList}>
            <h2> Today's Exercises </h2>
            <ul>
                {exercises.map((exercise, index) => (
                    <Item
                        key={index}
                        {...exercise}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;