import Button from "../Button";
import Clock from "./Clock"
import style from "./Stopwatch.module.scss"

export function Stopwatch() {
    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Choose an exercise and start the clock</p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button
                text="Start!"
            />
        </div>
    )
}