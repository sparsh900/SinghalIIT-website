import React, { Component } from 'react';
import Navigationbar from './navbar';
import Top_bk_image from './top_background_image';
import { Col, Row } from "react-bootstrap"
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
import Dashboard5 from "../image/dashboard5.png"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";
import axios from 'axios'

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: ''
        };
    }

    componentDidMount() {
        const l = {
            Email: localStorage.getItem('mail'),
            installment_number: 1
        }

        axios.post('/API/installment_status', l)
            .then(res => {
                if (res.data.error == 'none') {
                    if (res.data.result == 1) {
                        this.setState({
                            status: 1
                        })
                    }
                }
                else {
                    alert(res.data.error)
                    alert("try again")
                }
            })
            .catch(err => console.error(err))

    }

    render() {
        if (this.state.status == 1) {
            return (
                <div className='scroll_remove'>
                    <Navigationbar />
                    <Top_bk_image />
                    <Row className='card-row justify-content-center'>
                        <Col xs={6} lg={3} className='card_col_padding text-center'>
                            <Card_render src={Dashboard1} label={"Lectures"} />
                        </Col>
                        <Col xs={6} lg={3} className='card_col_padding text-center'>
                            <Card_render src={Dashboard2} label={"Chat with Us"} />
                        </Col>
                        <Col xs={6} lg={3} className='card_col_padding text-center'>
                            <Card_render src={Dashboard3} label={"Study Material"} />
                        </Col>
                        <Col xs={6} lg={3} className='card_col_padding text-center'>
                            <Card_render src={Dashboard4} label={"Practice Tests"} />
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
                    <Footer />

                </div>
            )
        }

        else {
            return (
                <div className='scroll_remove'>
                    <Navigationbar />
                    <Top_bk_image />
                    <Row className='card-row justify-content-center'>
                        <Col xs={6} lg={3} className='card_col_padding text-center'>
                            <a href='/student_enrollment'>
                                <Card_render src={Dashboard5} label={"Student Enrollment"} />
                            </a>

                        </Col>
                        <Col xs={6} lg={3} className='card_col_padding text-center'>
                            <Card_render src={Dashboard2} label={"Chat with Us"} />
                        </Col>
                        {/* <Col xs={6} lg={3} className='card_col_padding text-center'>
                        <Card_render src={Dashboard3} label={"Study Material"}/>
                        </Col>
                        <Col xs={6} lg={3} className='card_col_padding text-center'>
                        <Card_render src={Dashboard4} label={"Practice Tests"}/>
                        </Col> */}
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
                    <Footer />

                </div>
            )
        }

    }
}

export default Dashboard;