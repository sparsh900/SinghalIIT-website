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
import My_Profile from './my_profile'
import { BrowserRouter as Router, Route, Link, Navigate } from 'react-router-dom';
import Dashboard from './dashboard'

export default class Home extends Component {

    constructor(props) {
        
        super(props);
        this.handleModal = this.handleModal.bind(this);
        this.state = {
            show: false,
            val: ''
        }
    }

    updateval1=()=>{
        this.setState({ val: 1 })
    }

    updateval2=()=>{
        this.setState({ val: 2 })
    }

    updateval3=()=>{
        this.setState({ val: 3 })
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }

    componentDidMount(){

        if(localStorage.getItem('mail')==null)
        {
            this.updateval1()
        }
        else{
            this.updateval2()
        }
    }
    

    responsegoogle=(response)=>{
        console.log(response)
        axios.post('/API/user_exist',{email: response.profileObj.email})
    .then(res=>{
        console.log(res.data)
      if(res.data.result==false){
          this.updateval3()
      }
      else{
        localStorage.setItem('mail',response.profileObj.email )
        this.updateval2()
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
        if(this.state.val==2){
            return(
                <Dashboard/>
            )
        }

        if(this.state.val==3){
            return(
                <My_Profile/>
            )
        }

        else{
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
}
