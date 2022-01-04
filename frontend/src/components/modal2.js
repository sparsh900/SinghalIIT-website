import React, { Component } from 'react'
import { Form, Modal, Button, Row, Col, Container } from "react-bootstrap"
import "../App.css"

export default class Modal2 extends Component {

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
                >


                    <Modal.Body className='modal2_color'>
                        <Container>
                            <Row className="justify-content-center">
                                <Col xs={10}>
                                    <div className='modal1_heading modal2_padding'>
                                        Kindly fill in the details
                                    </div>

                                    <div>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className='modal2_label'>Name</Form.Label>
                                                <Form.Control type="name" className='modal2_input' />
                                                {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className='modal2_label'>Mobile Number</Form.Label>
                                                <Form.Control type="phone" className='modal2_input' />
                                            </Form.Group>
                                            <div className='center_button'>
                                                <Button variant="primary" type="submit" className='modal2_submit_button'>
                                                    Submit
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>

                                </Col>

                            </Row>
                        </Container>

                    </Modal.Body>



                </Modal>
            </div>
        )
    }
}
