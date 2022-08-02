import React, { Component } from 'react'
import {Row,Col, Form, Button } from 'react-bootstrap'
import "../App.css"
import axios from 'axios'

export default class Promocode extends Component {
    constructor(props) {
        
        super(props);
        this.onChangePromocode = this.onChangePromocode.bind(this);
        this.onSubmitpromocode = this.onSubmitpromocode.bind(this);
        this.state = {
            promocode: ''
        }
    }

    

    onChangePromocode(e) {
        this.setState({
          phone: e.target.value
        })
      }

      onSubmitpromocode(e) {
        e.preventDefault();
  
        const login = {
          promocode: this.state.promocode
        }
  
        axios.post('/API/promo_code_exist', login)
          .then(res => {
           if(res.data.error =='none' ){
             if(res.data.result==1){
                
                    this.props.parentCallback(20000);
                    e.preventDefault()
               
             }
             else if(res.data.result==0){
                
                    this.props.parentCallback(0);
                    e.preventDefault()
               
             }
          }
          else{
            alert(res.data.error)
            alert("try again")
          }
        })
        .catch(err=> console.error(err))
    }

    render() {
        return (
            <div>
                <div className='promocode_text'>
                    STUDENT ENROLLMENT FEES :  ₹ 80,000
                </div>
                <Form onSubmit={this.onSubmitpromocode}>
                    <Form.Group className="mb-3 feild_padding" controlId="formBasicEmail">
                        <Row className="justify-content-center">
                            <Col lg={7} xs={10}>
                                <Form.Label className='form_label' value={this.state.promocode} onChange={this.onChangePromocode}>Enter Promo Code</Form.Label>
                                <div className='in_row'>
                                    <Form.Control type="name" className='promocode_input' />
                                    <Button variant="primary" type="submit" className='apply_button '>
                                        Apply
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <div className='center_button'>
                        <Button variant="primary" type="submit" className='submit_button'>
                            Pay Now
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}
