import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap"
import GoogleButton from 'react-google-button'
import "../App.css"

export default class Modal1 extends Component {

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
    //     const [show, setShow] = useState(false);

    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);


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
                >
                    <Modal.Body className='modal1_color text-center'>
                        <div className='modal1_heading'>
                            Create/Sign in to your Account
                        </div>

                        <GoogleButton
                        className='google_button_style'
                            type="light"
                            label='Continue with google'
                            onClick={() => { console.log('Google button clicked') }}
                        />
                        <div className='modal1_content1'>
                            By creating an account, you agree to the
                        </div>
                        <div className='modal1_content2'>
                            Terms & Conditions
                        </div>
                    </Modal.Body>

                </Modal>

            </div>
        )
    }
}
