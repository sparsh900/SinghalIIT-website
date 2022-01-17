import React, { Component } from 'react'
import Navigationbar from './navbar'
import Home_desktop from "../image/home_desktop.png"
import Profile_card from './profile_card'
import { Row, Col, Modal } from "react-bootstrap"
import Our_advantages from './our_advantages'
import Our_ideology from './our_ideology'
import GoogleButton from 'react-google-button'
import GoogleLogin from 'react-google-login'
import Footer from './footer'
import axios from 'axios'

export default class Home extends Component {

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

    responsegoogle=(response)=>{
        console.log(response)
        localStorage.setItem('mail',response.profileObj.email )

        axios.post('/API/user_exist',{email: localStorage.getItem('mail')})
    .then(res=>{
      if(res.data=="false"){
          
      }
    })
    .catch(err=>{console.error(err)})

        // axios.post('/API/user_exist',{username: localStorage.getItem('mail')})
        //   .then(res=>{
        //     console.log(res.data)
        //   })
        //   .catch(err=>console.error(err))
        // }

        // console.log(localStorage.getItem('mail'))
    }


    responsefailure=(response)=>{
        console.log(response);
    }



    render() {
        return (
            <div className='scroll_remove'>
                <Navigationbar/>
                <img src={Home_desktop} onClick={() => this.handleModal()} className='home_desktop_image'/>
                <h1 className='start_heading1'>
                        STUDENT FEEDBACK
                    </h1>
                <Row className='home_desktop_profile_row_padding justify-content-center'>
                    <Col xs={4} className='home_desktop_profile_padding text-center'>
                        <Profile_card/>
                    </Col>
                    <Col xs={4} className='home_desktop_profile_padding text-center'>
                        <Profile_card/>
                    </Col>
                    <Col xs={4} className='home_desktop_profile_padding text-center'>
                        <Profile_card/>
                    </Col>
                </Row>
                <Our_advantages/>
                <Our_ideology/>
                <Footer/>


                <Modal
                    show={this.state.show}
                    onHide={() => this.handleModal()}
                    keyboard={false}
                >
                    <Modal.Body className='modal1_color text-center'>
                        <div className='modal1_heading'>
                            Create/Sign in to your Account
                        </div>

                        <GoogleLogin
                        clientId='365809453947-saueh3entpc3kr4i88cbh2i0pk3baghj.apps.googleusercontent.com'
                        buttonText='Continue with google'
                        onSuccess={this.responsegoogle}
                        onFailure={this.responsefailure}
                        cookiePolicy={'single_host_origin'}
                        className='google_button_style'
                            // type="light"
                            // label='Continue with google'
                            // onClick={() => { console.log('Google button clicked') }}
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
