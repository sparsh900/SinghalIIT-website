import React, { Component } from 'react'
import Navigationbar from './navbar'
import Home_desktop from "../image/home_desktop.png"
import Profile_card from './profile_card'
import { Row, Col } from "react-bootstrap"
import Our_advantages from './our_advantages'
import Our_ideology from './our_ideology'
import Footer from './footer'

export default class Home extends Component {
    render() {
        return (
            <div className='scroll_remove'>
                <Navigationbar/>
                <img src={Home_desktop} className='home_desktop_image'/>
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
            </div>
        )
    }
}
