import React from 'react';
import { text } from 'stream/consumers';
import style from './Button.module.scss'

//Class Component
class Button extends React.Component<{ text: String}> {
    render() {
        return (
            <button className={style.button}>
                {this.props.text}
            </button>
        )
    }
}

export default Button;