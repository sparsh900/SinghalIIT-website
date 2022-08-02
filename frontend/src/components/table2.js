import React, { Component } from 'react'
import { Table, Row, Col } from "react-bootstrap"
import axios from 'axios'
import "../App.css"

export default class Table_2 extends Component {
    constructor(props) {

        super(props);
        this.state = {
            firstinstallmentduedate: '',
            secondinstallmentduedate: '',
            thirdinstallmentduedate: '',
            firstinstallmentamount: '',
            secondinstallmentamount: '',
            thirdinstallmentamount: '',
            status1: false,
            status2: false,
            status3: false
        }
    }

    componentDidMount() {
        axios.post('/API/Fee_table_content', { Email: localStorage.getItem('mail') })
            .then(res => {
                if (res.data.error === 'none') {
                    this.setState({
                        firstinstallmentduedate: (res.data.result.firstInstallmentDueDate - this.props.discount),
                        secondinstallmentduedate: res.data.result.secondInstallmentDueDate,
                        thirdinstallmentduedate: res.data.result.thirdInstallmentDueDate,
                        firstinstallmentamount: res.data.result.firstInstallmentAmount,
                        secondinstallmentamount: res.data.result.secondInstallmentAmount,
                        thirdinstallmentamount: res.data.result.thirdInstallmentAmount
                    })
                }
                else {
                    alert(res.data.error)
                    alert("try again after some time")
                }
            })
            .catch(err => console.error(err))

        const l1 = {
            Email: localStorage.getItem('mail'),
            installment_number: 1
        }

        axios.post('/API/installment_status', l1)
            .then(res => {
                if (res.data.error == 'none') {
                    if (res.data.result == 1) {
                        this.setState({
                            status1: true
                        })
                    }
                }
                else {
                    alert(res.data.error)
                    alert("try again")
                }
            })
            .catch(err => console.error(err))

        const l2 = {
            Email: localStorage.getItem('mail'),
            installment_number: 2
        }

        axios.post('/API/installment_status', l2)
            .then(res => {
                if (res.data.error == 'none') {
                    if (res.data.result == 1) {
                        this.setState({
                            status2: true
                        })
                    }
                }
                else {
                    alert(res.data.error)
                    alert("try again")
                }
            })
            .catch(err => console.error(err))

        const l3 = {
            Email: localStorage.getItem('mail'),
            installment_number: 3
        }

        axios.post('/API/installment_status', l3)
            .then(res => {
                if (res.data.error == 'none') {
                    if (res.data.result == 1) {
                        this.setState({
                            status3: true
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
        return (
            <div>
                <Row className='justify-content-center'>
                    <Col xs={10} lg={10} >
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
                                    {/* {this.state.table_content.map((trow, index) => {
                                        return (
                                            <tr className='table_row2' key={trow.email}>
                                                <th>{index + 1}</th>
                                                <td>{trow.name}</td>
                                                <td>{trow.email}</td>
                                                <td>{trow.email}</td>
                                            </tr>
                                        )

                                    })} */}
                                    <tr className={"table_row2 " + (this.state.status1 ? 'strikeout' : 'strikeout')}>
                                        <td >1st Installment</td>
                                        <td>{this.state.firstinstallmentduedate}</td>
                                        <td>{this.state.firstinstallmentamount}</td>

                                    </tr>
                                    <tr className={"table_row2 " + (this.state.status2 ? 'strikeout' : 'strikeout')}>
                                        <td >2nd Installment</td>
                                        <td>{this.state.secondinstallmentduedate}</td>
                                        <td>{this.state.secondinstallmentamount}</td>

                                    </tr>
                                    <tr className={"table_row2 " + (this.state.status3 ? 'strikeout' : '')}>
                                        <td >3rd Installment</td>
                                        <td>{this.state.thirdinstallmentduedate}</td>
                                        <td>{this.state.thirdinstallmentamount}</td>

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
