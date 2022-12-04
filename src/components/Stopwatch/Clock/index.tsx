import React from "react";
import style from "./Clock.module.scss"

export default function Clock() {
    return (
        <React.Fragment>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockSplit}>:</span>
            <span className={style.clockNumber}>0</span>
            <span className={style.clockNumber}>0</span>
        </React.Fragment>
    )
}