import React from 'react';
import { text } from 'stream/consumers';
import style from './Button.module.scss'

//Class Component
class Button extends React.Component<{
    text: String, 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}> {
    render() {
        //Defaults to button type if none is informed since 'type?' is optional
        const { type = "button", onClick} = this.props;
        return (
            <button type={type} className={style.button} onClick={onClick}>
                {this.props.text}
            </button>
        )
    }
}

export default Button;