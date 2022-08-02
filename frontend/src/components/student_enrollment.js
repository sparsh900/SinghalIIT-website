import React, { Component } from 'react'
import { Table, Row, Col } from "react-bootstrap"
import Promocode from './promocode'
import Table_2 from './table2'
import "../App.css"
import Footer from './footer'
import axios from 'axios'
import Top_bk_image4 from './top_background_image4'
import Navigationbar from './navbar'

export default class Student_enrollment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            discount: '',
            status: ''
        }
    }

    componentDidMount(){
        const l = {
             Email: localStorage.getItem('mail'),
             installment_number: 1
          }
    
          axios.post('/API/installment_status', l)
            .then(res => {
             if(res.data.error =='none' ){
               if(res.data.result==1){
                this.setState({
                    status: 1
                  })
               }
            }
            else{
              alert(res.data.error)
              alert("try again")
            }
          })
          .catch(err=> console.error(err))
    }

    callbackFunction = (Data) => {
        this.setState({discount: Data})
    }
  
    render() {
        if(localStorage.getItem('mail')!=null){
            if(this.state.status==1){
                return (
                    <div className='scroll_remove'>
                        <Navigationbar/>
                        <Top_bk_image4/>
                        <Row className='justify-content-center stenroll_padding'>
                            <Col lg={7} xs={12}>
                                <Table_2 discount={this.state.discount}/>
                            </Col>
                        </Row>
                        <Footer/>
                    </div>
                )
            }
            else{
                return (
                    <div className='scroll_remove'>
                        <Navigationbar/>
                        <Top_bk_image4/>
                        <Row className='justify-content-center stenroll_padding'>
                            <Col lg={5} xs={11}>
                                <Promocode parentCallback = {this.callbackFunction}/>
                            </Col>
                            <Col lg={7} xs={12}>
                                <Table_2 discount={this.state.discount}/>
                            </Col>
                        </Row>
                        <Footer/>
                    </div>
                )
            }
         }
    }
}
