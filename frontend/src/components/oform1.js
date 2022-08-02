import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import {BsPen} from "react-icons/bs"
import axios from 'axios'
import "../App.css"

export default class Oform_1 extends Component {

    constructor(props) {
        super(props);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeTopic = this.onChangeTopic.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onSubmitlogin = this.onSubmitlogin.bind(this);
        this.state = {
            subject: '',
            topic: '',
            file: null
        };
    }

    onChangeFile(e) {
        this.setState({
          file: e.target.files[0]
        })
      }

    onChangeSubject(e) {
        this.setState({
          subject: e.target.value
        })
      }
      onChangeTopic(e) {
        this.setState({
          topic: e.target.value
        })
      }

      onSubmitlogin(e) {
        e.preventDefault()
      //   const l = {
      //     Subject: this.state.subject,
      //     Subject: this.state.subject,
      //  }
      const formData = new FormData();
      formData.append("file", this.state.file, this.state.file.name);
      formData.append("Subject", this.state.subject);
      formData.append("Topic", this.state.topic);

      console.log(this.state.file)
        axios.post('/API/submit_studymaterial', formData)
          .then(res => {
           if(res.data.error =='none' ){
             alert("study material is added")
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
                <Form onSubmit={this.onSubmitlogin}>
                    {/* <Form.Group className="mb-3 feild_padding" controlId="formBasicEmail"> 
                        <Form.Label className='form_label'>subject</Form.Label>
                        <Form.Control type="name" className='form_input' value={this.state.name} onChange={this.onChangeName}/>
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> 
                    </Form.Group> */}

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="edit_profile_text">subject</Form.Label>
                        <Form.Control as="select" custom onChange={this.onChangeSubject}>
                        <option value="physics">physics</option>
                        <option value="chemistry">chemistry</option>
                        <option value="math">maths</option>
                        
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3 field_padding" controlId="formBasicPassword">
                        <Form.Label className='form_label'>topic</Form.Label>
                        <Form.Control type="phone" className='form_input' value={this.state.topic} onChange={this.onChangeTopic}/>
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="edit_profile_text">study material file</Form.Label>
                        <Form.Control  className="edit_profile_text" onChange={this.onChangeFile} type="file" />
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
