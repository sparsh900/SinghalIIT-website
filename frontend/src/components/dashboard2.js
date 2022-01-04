import React, { Component } from 'react';
import Navigationbar from './navbar';
import Top_bk_image from './top_background_image';
import {Col, Row} from "react-bootstrap"
import Card_render from './card';
import Footer from './footer';
import Dashboard5 from "../image/dashboard5.png"
import Dashboard2 from "../image/dashboard2.png"
import Dashboard3 from "../image/dashboard3.png"
import Dashboard4 from "../image/dashboard4.png"
import "../App.css";

class Dashboard_2 extends Component{
    render(){
        return (
            <div className='scroll_remove'>
                <Navigationbar/>
                <Top_bk_image/>
                <Row className='card-row justify-content-center'>
                    <Col sm={6} md={3} className='text-center'>
                    <Card_render src={Dashboard5} label={"Student Enrollment"}/>
                    </Col>
                    <Col sm={6} md={3} className='text-center'>
                    <Card_render src={Dashboard2} label={"Chat with Us"}/>
                    </Col>
                    <Col sm={6} md={3} className='text-center'>
                    <Card_render src={Dashboard3} label={"Study Material"}/>
                    </Col>
                    <Col sm={6} md={3} className='text-center'>
                    <Card_render src={Dashboard4} label={"Practice Tests"}/>
                    </Col>
                </Row>
                <Footer/>
                
            </div>
        )
    }
}

export default Dashboard_2;