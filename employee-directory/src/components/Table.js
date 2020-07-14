import React, { Component } from 'react'

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

const TableBody = (props) => {
    const rows = props.resultData.map((row, index) => {
        return (
            <tr key={index}>
                <td><img alt={row.name.first} className="img-fluid" src={row.picture.thumbnail} /></td>
                <td>{row.name.first} {row.name.last}</td>
                <td>{row.phone}</td>
                <td>{row.email}</td>
                <td>{row.dob.date}</td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const { resultData } = this.props
        return (
            <table className="table table-striped">
                <TableHeader />
                <TableBody resultData={resultData} />
            </table>
        )
    }
}

export default Table