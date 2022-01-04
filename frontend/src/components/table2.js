import React, { Component } from 'react'
import { Table, Row, Col } from "react-bootstrap"
import "../App.css"

export default class Table_2 extends Component {
    render() {
        return (
            <div>
                <Row className='justify-content-center'>
                    <Col sm={10} md={9} >
                        <div className='table_border_col'>
                            <Table className="table table-border no-borderRadiusImportant border-radiusImportant" size='lg' scrollX hover>
                                <thead>
                                    <tr className='table_row_heading'>
                                        <th className='table_column_heading'>Student Name</th>
                                        <th className='table_column_heading'>Enrollment Date</th>
                                        <th className='table_column_heading'>Bonus Amount</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className='table_body_padding'>
                                    <tr className='table_row2'>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                       
                                    </tr>
                                    <tr className='table_row2'>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        
                                    </tr>
                                    <tr className='table_row2'>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        
                                    </tr>
                                    <tr className='table_row'>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                    </Col>
                </Row>
            </div>
        )
    }
}
