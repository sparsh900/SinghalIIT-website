import React, { Component } from 'react';
import undraw_chat_bot from "../image/undraw_chat_bot.svg"
import { Card, Container } from "react-bootstrap";
import "../App.css";

class Card_render extends Component {
    render() {
        return (
            
            <div>
                    <div className='card_size text-center2'>
                        <img className='card_image_size' src={this.props.src} />
                    </div>
                    <div className='card_body'>
                        <p className='card_text'>{this.props.label}</p>
                    </div>
            </div>
            

        )
    }
}

export default Card_render;