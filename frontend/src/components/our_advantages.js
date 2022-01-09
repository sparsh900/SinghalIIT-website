import React, { Component } from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Row, Col } from "react-bootstrap"

export default class Our_advantages extends Component {
    render() {
        return (
            <div className='our_advantage_color'>
                <h1 className='start_heading2'>
                OUR ADVANTAGES !
                    </h1>

                    <Row className='justify-content-center'>
                        <Col xs={10} md={5} className='our_advantage_col in_row'>
                        <IoMdCheckmarkCircleOutline className='our_advantage_logo' />
                        <div className='our_advantage_text'>
                        Ignoring average students for few toppers
                        </div>
                        </Col>
                        <Col xs={10} md={5} className='our_advantage_col in_row'>
                        <IoMdCheckmarkCircleOutline className='our_advantage_logo' />
                        <div className='our_advantage_text'>
                        Ignoring average students for few toppers
                        </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs={10} md={5} className='our_advantage_col in_row'>
                        <IoMdCheckmarkCircleOutline className='our_advantage_logo' />
                        <div className='our_advantage_text'>
                        Ignoring average students for few toppers
                        </div>
                        </Col>
                        <Col xs={10} md={5} className='our_advantage_col in_row'>
                        <IoMdCheckmarkCircleOutline className='our_advantage_logo' />
                        <div className='our_advantage_text'>
                        Ignoring average students for few toppers
                        </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs={10} md={5} className='our_advantage_col in_row'>
                        <IoMdCheckmarkCircleOutline className='our_advantage_logo' />
                        <div className='our_advantage_text'>
                        Ignoring average students for few toppers
                        </div>
                        </Col>
                        <Col xs={10} md={5} className='our_advantage_col in_row'>
                        <IoMdCheckmarkCircleOutline className='our_advantage_logo' />
                        <div className='our_advantage_text'>
                        Ignoring average students for few toppers
                        </div>
                        </Col>
                    </Row>
                    
            </div>
        )
    }
}
