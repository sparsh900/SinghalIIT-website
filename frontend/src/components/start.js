import React, { Component } from 'react'
import Navigationbar from './navbar'
import {Row,Col} from "react-bootstrap"
import "../App.css"

export default class Start_page extends Component {
    render() {
        return (
            <div>
                <Navigationbar/>
                <div className='start_panel'>
                    <Row className='start_panel_gradient'>
                        <Col className='start_panel_image'>
                        </Col>
                        <Col>
                        fhjghk
                        </Col>
                    </Row>
                </div>
                <div>
                    <h1 className='start_heading1'>
                        STUDENT FEEDBACK
                    </h1>
                </div>
            </div>
        )
    }
}
