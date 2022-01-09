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
                            <section className='table-radius'>
                            <Table className="table table-bordered" style={{"borderWidth":"1px", 'borderColor':"#53B8BB", 'borderStyle':'solid'}} size='lg' scrollX hover>
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
                                    <tr className='table_row2'>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Otto</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr className='table_row2'>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Otto</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr className='table_row2'>
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
                            </section>
                        </div>

                    </Col>
                </Row>

            </div>
        )
    }
}
