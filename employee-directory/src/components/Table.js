import React, { Component } from 'react'
import ResultList from './ResultList'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    
    return <ResultList />
}

class Table extends Component {
    render() {
        const {resultData} = this.props
        return (
            <table>
                <TableHeader />
                <TableBody resultData = {resultData}/>
            </table>
        )
    }
}

export default Table