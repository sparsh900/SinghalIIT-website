import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import {BsPen} from "react-icons/bs"
import "../App.css"

export default class Form_1 extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3 feild_padding" controlId="formBasicEmail">
                        <Form.Label className='form_label'>Name</Form.Label>
                        <Form.Control type="name" className='form_input'/>
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3 field_padding" controlId="formBasicPassword">
                        <Form.Label className='form_label'>Mobile Number</Form.Label>
                        <Form.Control type="phone" className='form_input'/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3 field_padding" controlId="formBasicPassword">
                        <Form.Label className='form_label'>Email Address</Form.Label>
                        <Form.Control type="email" className='form_input_color' placeholder='xyz@gmail.com'/>
                    </Form.Group>
                    <div className='center_button'>
                    <Button variant="primary" type="submit" className='submit_button'>
                        Submit
                    </Button>
                    </div>
                </Form>
            </div>
        )
    }
}
