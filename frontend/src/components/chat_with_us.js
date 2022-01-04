import React, { Component } from 'react';
import Navigationbar from './navbar';
import Top_bk_image3 from './top_background_image3';
import {Col, Row} from "react-bootstrap"
import Contact_us from './contact';
import Footer from './footer';
import Form_1 from './form1';

import "../App.css";

class Chat_with_us extends Component{
    render(){
        return (
            <div className='scroll_remove'>
                <Navigationbar/>
                <Top_bk_image3/>
                <div className='chatwithus_padding'>
                <Contact_us/>
                </div>
                
                <Footer/>
                
            </div>
        )
    }
}

export default Chat_with_us;