import React, { Component } from 'react'
import { CgProfile } from "react-icons/cg";
import { Row, Col } from "react-bootstrap"

export default class Profile_card extends Component {
    render() {
        return (
            <div className='profile_card_padding text-center'>
                <CgProfile className='profile_icon' />
                <div className='profile_card_heading'>
                    LOREM IPSUM
                </div>
                
                <Row className='justify-content-center'>
                    <Col xs={9}>
                    <div className='profile_card_text text-center'>
                            dhgm fdv sfufui reurighjvnb fvkiferf
                            </div>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
