import React, { Component } from 'react'
import { Row, Col, Container,Button } from "react-bootstrap"
import Header2 from "../image/header2.png"
import { BsBank2 } from 'react-icons/bs';
import "../App.css"

export default class Header_2 extends Component {
    render() {
        return (
            <div>
                <Row className='justify-content-center header_1'>
                    <Col xs={5} className='header1_image_align'>
                        <img src={Header2} className='header1_image' />
                    </Col>
                    <Col xs={5} className='header2_content text-center'>
                        <div>
                            <div className='header1_heading'>
                            Welcome Rushil !
                            </div>
                            {/* <div className='header1_content1'>
                                Help students build a better future with the best coaching institute.
                            </div> */}
                            <div className='header1_content2'>
                                <span className='header1_content2_span'>Promote</span> Singhal IIT and earn<span className='header1_content2_span'> ₹ 20,000</span> per enrolled student.
                            </div>
                            <div className='text-center'>
                                <div className='header2_promocode'>
                                My Promo code: AB1234
                                </div>
                            <Button variant="primary" type="submit" className='header2_button'>
                                <BsBank2 className='header2_image_button'/>
                                My Bank Details
                            </Button>
                            </div>
                            
                        </div>
                    </Col>
                    <Col xs={2}>
                    </Col>
                </Row>
            </div>
        )
    }
}
