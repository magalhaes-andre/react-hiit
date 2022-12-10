import React from 'react';
import style from './Button.module.scss'

interface Props {
    text: String,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

// TODO: Study benefits of function components x class components.
export default function Button({ onClick, type, text }: Props) {
    return (
        <button type={type} className={style.button} onClick={onClick}>
            {text}
        </button>
    )
}