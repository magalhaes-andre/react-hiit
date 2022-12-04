import React from 'react';
import { text } from 'stream/consumers';
import style from './Button.module.scss'

//Class Component
class Button extends React.Component<{
    text: String, 
    type?: "button" | "submit" | "reset" | undefined
}> {
    render() {
        //Defaults to button type if none is informed since 'type?' is optional
        const { type = "button" } = this.props;
        return (
            <button type={type} className={style.button}>
                {this.props.text}
            </button>
        )
    }
}

export default Button;