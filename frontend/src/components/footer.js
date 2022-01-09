import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap"
import Logo from "../image/logo.png"
import "../App.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Row className="justify-content-center footer_padding">
                    <Col xs={6} md={4} className="text-center">
                        <img src={Logo} className='footer_logo' />
                    </Col>
                    <Col xs={6} md={7} className="text-center">
                        <Container>
                            <Row className="justify-content-center">
                                <Col xs={12} md={6} className="footer_content text-center">
                                    {/* info@singhaliit.com */}
                                </Col>
                                <Col xs={12} md={6} className="text-center">
                                    <p className="footer_terms">Terms & Conditions</p>
                                </Col>
                            </Row>
                        </Container>

                    </Col>

                </Row>
            </div>
        )
    }
}
