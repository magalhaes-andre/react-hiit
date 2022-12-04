import style from '../List.module.scss';

export default function Item({ name, time }: { name: String, time: String }) {

    return (
        <li className={style.item}>
            <h3> {name} </h3>
            <span> {time} </span>
        </li>
    )

}