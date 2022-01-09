import React, { Component } from 'react'
import { Row, Col, Container,Button } from "react-bootstrap"
import Email_Campaign from "../image/Email_campaign.png"
import Google from "../image/google.png"
import GoogleButton from 'react-google-button'
import "../App.css"

export default class Header_1 extends Component {
    render() {
        return (
            <div>

                <Row className='justify-content-center header_1'>
                    <Col xs={5} className='header1_image_align'>
                        <img src={Email_Campaign} className='header1_image' />
                    </Col>
                    <Col xs={6} className='header1_content text-center'>
                        <div>
                            <div className='header1_heading'>
                                Promote and Earn
                            </div>
                            <div className='header1_content1'>
                                Help students build a better future with the best coaching institute.
                            </div>
                            <div className='header1_content2'>
                                <span className='header1_content2_span'>Promote</span> Singhal IIT and earn<span className='header1_content2_span'> ₹ 20,000</span> per enrolled student.
                            </div>
                            <div className='text-center2'>
                            <Button variant="primary" type="submit" className='header1_button'>
                                <img src={Google} className='header1_image_button'/>
                                Continue with Google
                            </Button>
                            </div>
                            
                        </div>
                    </Col>
                    
                </Row>


            </div>
        )
    }
}
