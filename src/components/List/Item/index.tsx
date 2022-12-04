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

    return (
        <li
            className={`${style.item} ${selected ? style.selectedItem : ''}`}
            onClick={() => selectExercise({
                name,
                time,
                selected,
                completed,
                id
            })}>
            <h3> {name} </h3>
            <span> {time} </span>
        </li>
    )

}