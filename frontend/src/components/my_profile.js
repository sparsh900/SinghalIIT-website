import React, { Component } from 'react';
import Navigationbar from './navbar';
import Top_bk_image_2 from './top_background_image2';
import {Col, Row} from "react-bootstrap"
import Footer from './footer';
import Form_1 from './form1';

import "../App.css";

class My_Profile extends Component{
    render(){
        return (
            <div className='scroll_remove'>
                <Navigationbar/>
                <Top_bk_image_2/>
                <Row className='justify-content-center form1_padding'>
                    <Col lg={3} md={8} xs={10}>
                    <Form_1/>
                    </Col>
                </Row>

                
                <Footer/>
                
            </div>
        )
    }
}

export default My_Profile;