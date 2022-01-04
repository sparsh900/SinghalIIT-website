import React, { Component } from 'react'
import { Table, Row, Col } from "react-bootstrap"
import Promocode from './promocode'
import Table_2 from './table2'
import "../App.css"

export default class Student_enrollment extends Component {
    render() {
        return (
            <div>
                
                <Row className='justify-content-center'>
                    <Col md={5} xs={10}>
                        <Promocode/>
                    </Col>
                    <Col md={5} xs={10}>
                        <Table_2/>
                    </Col>
                </Row>
            </div>
        )
    }
}
