import React from "react";
import { timeToTimeDigits } from "../../../common/utils/time";
import { ITimeDigits } from "../../../types/timeDigits";
import style from "./Clock.module.scss"

interface Props {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
    const timeDigits: ITimeDigits = timeToTimeDigits(time);
    
    return (
        <React.Fragment>
            <span className={style.clockNumber}>{timeDigits.minutesLeftDigit}</span>
            <span className={style.clockNumber}>{timeDigits.minutesRightDigit}</span>
            <span className={style.clockSplit}>:</span>
            <span className={style.clockNumber}>{timeDigits.secondsLeftDigit}</span>
            <span className={style.clockNumber}>{timeDigits.secondsRightDigit}</span>
        </React.Fragment>
    )
}