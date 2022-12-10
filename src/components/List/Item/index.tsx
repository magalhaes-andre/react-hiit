import { IExercise } from '../../../types/exercise';
import style from './Item.module.scss';

interface Props extends IExercise {
    selectExercise: (selectExercise: IExercise) => void
}

export default function Item(
    {
        name,
        time,
        selected,
        completed,
        id,
        selectExercise
    }: Props) {

    //  Conditional rendering on line 31. TODO: Research on the topic.    
    return (
        <li
            className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.completedItem : ''}`}
            onClick={() => !completed && selectExercise({
                name,
                time,
                selected,
                completed,
                id
            })}>
            <h3> {name} </h3>
            <span> {time} </span>
            {completed && <span className={style.done} aria-label="exercise finished"></span>}
        </li>
    )

}