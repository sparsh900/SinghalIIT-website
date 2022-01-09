import React, { Component } from 'react'
import Footer from './footer'
import Header_1 from './header1'
import How_it_works from './howitworks'
import Navigationbar from './navbar'
import Table1 from './table1'
import Table_2 from './table2'

export default class Promote_and_earn extends Component {
    render() {
        return (
            <div>
                <Navigationbar/>
                <Header_1/>
                <How_it_works/>
                <Table1/>
                <Table_2/>
                <Footer/>
                
            </div>
        )
    }
}
