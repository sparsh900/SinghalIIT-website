import React, { Component } from 'react';
import Navigationbar from './navbar';
import Top_bk_image from './top_background_image';
import {Col, Row} from "react-bootstrap"
import Card_render from './card';
import Footer from './footer';
import Form_1 from './form1';
import Contact_us from './contact';
import How_it_works from './howitworks';
import Table1 from './table1';
import Modal1 from './modal1';
import Modal2 from './modal2';
import Modal3 from './modal3';
import Header_1 from './header1';
import Header_2 from './header2';
import Dashboard1 from "../image/dashboard1.png"
import Dashboard2 from "../image/dashboard2.png"
import Dashboard3 from "../image/dashboard3.png"
import Dashboard4 from "../image/dashboard4.png"
import "../App.css";

class Dashboard extends Component{
    render(){
        return (
            <div className='scroll_remove'>
                <Navigationbar/>
                <Top_bk_image/>
                <Row className='card-row justify-content-center'>
                    <Col xs={6} lg={3} className='card_col_padding text-center'>
                    <Card_render src={Dashboard1} label={"Lectures"}/>
                    </Col>
                    <Col xs={6} lg={3} className='card_col_padding text-center'>
                    <Card_render src={Dashboard2} label={"Chat with Us"}/>
                    </Col>
                    <Col xs={6} lg={3} className='card_col_padding text-center'>
                    <Card_render src={Dashboard3} label={"Study Material"}/>
                    </Col>
                    <Col xs={6} lg={3} className='card_col_padding text-center'>
                    <Card_render src={Dashboard4} label={"Practice Tests"}/>
                    </Col>
                </Row>
                {/* <Row className='justify-content-center'>
                    <Col lg={3} md={8} xs={10}>
                    <Form_1/>
                    </Col>
                </Row>

                <Contact_us/>
                <How_it_works/>
                <Table1/>
                <Modal3/>
                <Header_2/> */}
                <Footer/>
                
            </div>
        )
    }
}

export default Dashboard;