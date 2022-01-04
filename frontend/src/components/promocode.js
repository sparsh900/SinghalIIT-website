import React, { Component } from 'react'
import {Row,Col, Form, Button } from 'react-bootstrap'
import "../App.css"

export default class Promocode extends Component {
    render() {
        return (
            <div>
                <div className='promocode_text'>
                    STUDENT ENROLLMENT FEES :  ₹ 80,000
                </div>
                <Form>
                    <Form.Group className="mb-3 feild_padding" controlId="formBasicEmail">
                        <Row className="justify-content-center">
                            <Col md={7} xs={10}>
                                <Form.Label className='form_label'>Enter Promo Code</Form.Label>
                                <div className='in_row'>
                                    <Form.Control type="name" className='promocode_input' />
                                    <Button variant="primary" type="submit" className='apply_button '>
                                        Apply
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        

                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <div className='center_button'>
                        <Button variant="primary" type="submit" className='submit_button'>
                            Pay Now
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}
