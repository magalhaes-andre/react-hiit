import { useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { IExercise } from "../../types/exercise";
import Button from "../Button";
import Clock from "./Clock"
import style from "./Stopwatch.module.scss"

interface Props {
    selected: IExercise | undefined;
}


export default function Stopwatch({selected}: Props) {
    const [time, setTime] = useState<Number>();
    
    if(selected?.time) {
        setTime(timeToSeconds(selected.time))
    }
    
    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Choose an exercise and start the clock.</p>
            <>Time: {time}</>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button
                text="Start!"
            />
        </div>
    )
}