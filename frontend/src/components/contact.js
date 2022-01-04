import React, { Component } from 'react'
import { Row, Col } from "react-bootstrap"
import Gmail from "../image/Gmail.png"
import Phone from "../image/Phone.png"
import telegram from "../image/telegram.png"
import Whatsapp from "../image/Whatsapp.png"
import "../App.css"
export default class Contact_us extends Component {
    render() {
        return (
            <div>
                <Row className='contact_padding justify-content-center'>
                    <Col sm={7} md={5} className='text-center'>
                        <div className='contact_box'>

                            <div className='contact_image_box'>
                                <img className='contact_image' src={Whatsapp} />
                            </div>

                            <div className='contact-text-box text-center'>
                                WhatsApp
                            </div>


                        </div>
                    </Col>
                    <Col md={5} sm={7} className='text-center'>
                        <div className='contact_box'>

                            <div className='contact_image_box'>
                                <img className='contact_image' src={Gmail} />
                            </div>

                            <div className='contact-text-box text-center'>
                            info@singhaiit.com
                            </div>


                        </div>
                    </Col>
                </Row>
                <Row className='contact_padding justify-content-center'>
                    <Col sm={7} md={5} className='text-center'>
                        <div className='contact_box'>

                            <div className='contact_image_box'>
                                <img className='contact_image' src={telegram} />
                            </div>

                            <div className='contact-text-box text-center'>
                                Telegram
                            </div>


                        </div>
                    </Col>
                    <Col md={5} sm={7} className='text-center'>
                        <div className='contact_box'>

                            <div className='contact_image_box'>
                                <img className='contact_image' src={Phone} />
                            </div>

                            <div className='contact-text-box text-center'>
                            +91-9876543210
                            </div>


                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
