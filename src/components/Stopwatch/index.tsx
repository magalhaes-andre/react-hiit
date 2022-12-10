import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { IExercise } from "../../types/exercise";
import Button from "../Button";
import Clock from "./Clock"
import style from "./Stopwatch.module.scss"

interface Props {
    selected: IExercise | undefined;
    exerciseFinish: () => void;
}


export default function Stopwatch({ selected, exerciseFinish }: Props) {
    //  Time to seconds needs to be here, if set on through the if statement, it will through "many re-renders" issue.
    //  For changing states such as the stopwatch itself we should use a hook called useEffect. TODO: Research on useEffect.
    //  TODO: Study difference between Number and number.
    //  TODO: Study component lifecycle as in: componentWillMount, componentDidMount, componentWillUpdate, componentWillUnmount and their relationships with hooks as useLayoutEffect or useEffect for example.
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    //  Defines the expectation of the counter to be explicitly a number. If it is not, then it is 0.
    //  Could be done with promises. TODO: Learn how to write this through promises.
    function start(counter: number = 0) {
        let decrementedCounter;
        setTimeout(() => {
            if(counter > 0) {
                decrementedCounter = counter - 1;
                setTime(decrementedCounter);
                return start(decrementedCounter);
            }
            exerciseFinish();
        }, 1000)
    }

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Choose an exercise and start the clock.</p>
            <div className={style.clockWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => start(time)}
                text="Start!"
            />
        </div>
    )
}