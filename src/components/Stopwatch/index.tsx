import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { IExercise } from "../../types/exercise";
import Button from "../Button";
import Clock from "./Clock"
import style from "./Stopwatch.module.scss"

interface Props {
    selected: IExercise | undefined;
}


export default function Stopwatch({selected}: Props) {
    //Time to seconds needs to be here, if set on through the if statement, it will through "many re-renders" issue.
    //For changing states such as the stopwatch itself we should use a hook called useEffect. TODO: Research on useEffect.
    //TODO: Study difference between Number and number.
    //TODO: Study component lifecycle as in: componentWillMount, componentDidMount, componentWillUpdate, componentWillUnmount and their relationships with hooks as useLayoutEffect or useEffect for example.
    const [time, setTime] = useState<Number>();
    
    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Choose an exercise and start the clock.</p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button
                text="Start!"
            />
        </div>
    )
}