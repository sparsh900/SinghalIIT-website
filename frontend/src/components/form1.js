import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import {BsPen} from "react-icons/bs"
import axios from 'axios'
import "../App.css"

export default class Form_1 extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmitlogin = this.onSubmitlogin.bind(this);
        this.state = {
            name: '',
            phone: '',
        };
    }

    onChangeName(e) {
        this.setState({
          name: e.target.value
        })
      }
      onChangePhone(e) {
        this.setState({
          phone: e.target.value
        })
      }

      onSubmitlogin(e) {
        e.preventDefault();
  
        const login = {
          Section: 1,
          Email: this.props.email,
          MobileNumber: this.state.phone,
          Name: this.state.name
        }
  
        axios.post('/API/RegisterUser', login)
          .then(res => {
           if(res.data ==true ){
                localStorage.setItem('mail',this.props.email )
                window.location.reload()
          }
          else{
            alert("try again")
          }
        })
        .catch(err=> console.error(err))
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitlogin}>
                    <Form.Group className="mb-3 feild_padding" controlId="formBasicEmail">
                        <Form.Label className='form_label'>Name</Form.Label>
                        <Form.Control type="name" className='form_input' value={this.state.name} onChange={this.onChangeName}/>
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3 field_padding" controlId="formBasicPassword">
                        <Form.Label className='form_label'>Mobile Number</Form.Label>
                        <Form.Control type="phone" className='form_input' value={this.state.phone} onChange={this.onChangePhone}/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3 field_padding" controlId="formBasicPassword">
                        <Form.Label className='form_label'>Email Address</Form.Label>
                        <Form.Control type="email" className='form_input_color' value={this.props.email} placeholder={this.props.email} disabled/>
                    </Form.Group>
                    <div className='center_button'>
                    <Button variant="primary" type="submit" className='submit_button'>
                        Submit
                    </Button>
                    </div>
                </Form>
            </div>
        )
    }
}
