import React, { Component } from 'react'
import { Form, Modal, Button, Row, Col, Container } from "react-bootstrap"
import "../App.css"


export default class Modal3 extends Component {

    constructor(props) {
        super(props);
        this.handleModal = this.handleModal.bind(this);
        this.state = {
            show: false
        }
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }


    render() {
        return (
            <div>
                <Button variant="primary" onClick={() => this.handleModal()}>
                    Launch static backdrop modal
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={() => this.handleModal()}
                    keyboard={false}
                    className='modal_border'
                    dialogClassName="border-radius-2"
                    size="lg"
                >


                    <Modal.Body className='modal2_color'>
                        <Container>
                            <div className='modal1_heading modal2_padding'>
                                Kindly Fill in Your Bank Details
                            </div>
                            <div>
                                <Form>
                                    <Row className="justify-content-center">
                                        <Col xs={10} md={5}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className='modal3_label'>Name</Form.Label>
                                                <Form.Control type="name" className='modal3_input' />
                                                {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className='modal3_label'>Mobile Number</Form.Label>
                                                <Form.Control type="phone" className='modal3_input' />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className='modal3_label'>Mobile Number</Form.Label>
                                                <Form.Control type="phone" className='modal3_input' />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className='modal3_label'>Upload Cancelled Cheque </Form.Label>
                                                <Form.Control type="file" id='file'className='modal3_file_input' />
                                            </Form.Group>

                                            {/* <input type="file" placeholder='Upload Cancelled Cheque' className='modal3_file_input'/> */}

                                        </Col>

                                        <Col xs={0} md={1}>
                                        </Col>
                                        <Col xs={10} md={5}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className='modal3_label'>Name</Form.Label>
                                                <Form.Control type="name" className='modal3_input' />
                                                {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className='modal3_label'>Mobile Number</Form.Label>
                                                <Form.Control type="phone" className='modal3_input' />
                                            </Form.Group>

                                            

                                        </Col>
                                    </Row>
                                    <div className='center_button'>
                                        <Button variant="primary" type="submit" className='modal2_submit_button'>
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </div>


                        </Container>

                    </Modal.Body>



                </Modal>
            </div>
        )
    }
}
