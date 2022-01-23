import React, { Component } from 'react'
import { Table, Row, Col } from "react-bootstrap"
import axios from 'axios'
import "../App.css"

export default class Table_2 extends Component {
    constructor(props) {

        super(props);
        
        this.state = {
            table_content: []
        }
    }

    componentDidMount() {
        axios.post('/API/Fee_table_content', localStorage.getItem('mail'))
            .then(res => {
                if(res.data.error==='none'){
                    console.log(res.data.result)
                  }
                  else{
                      alert(res.data.error)
                      alert("try again after some time")
                  }
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <Row className='justify-content-center'>
                    <Col sm={10} md={9} >
                        <div className='table_border_col'>
                            <Table className="table table-border" size='lg' scrollX hover>
                                <thead>
                                    <tr className='table_row_heading'>
                                        <th className='table_column_heading'>Installment Number</th>
                                        <th className='table_column_heading'>Due Date</th>
                                        <th className='table_column_heading'>Amount Enrollment</th>

                                    </tr>
                                </thead>
                                <tbody className='table_body_padding'>
                                    {this.state.table_content.map((trow, index) => {
                                        return (
                                            <tr className='table_row2' key={trow.email}>
                                                <th>{index + 1}</th>
                                                <td>{trow.name}</td>
                                                <td>{trow.email}</td>
                                                <td>{trow.email}</td>
                                            </tr>
                                        )

                                    })}
                                    {/* <tr className='table_row2'>
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
                                    </tr> */}
                                </tbody>
                            </Table>
                        </div>

                    </Col>
                </Row>
            </div>
        )
    }
}
