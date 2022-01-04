import React, { Component } from 'react'
import { Table, Row, Col } from "react-bootstrap"
import "../App.css"
export default class Table1 extends Component {
    render() {
        return (
            <div>
                <Row className='justify-content-center'>
                    <Col sm={10} md={9} >
                        <div className='table_border_col'>
                            <Table className="table table-bordered table_border" size='lg' scrollX bordered hover>
                                <thead>
                                    <tr className='table_row_heading'>
                                        <th className='table_column_heading'>Student Name</th>
                                        <th className='table_column_heading'>Enrollment Date</th>
                                        <th className='table_column_heading'>Bonus Amount</th>
                                        <th className='table_column_heading'>Status</th>
                                        <th className='table_column_heading'>Payment Date</th>
                                        <th className='table_column_heading'>Mode of Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='table_row'>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Otto</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr className='table_row'>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Otto</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr className='table_row'>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Otto</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr className='table_row'>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Otto</td>
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
