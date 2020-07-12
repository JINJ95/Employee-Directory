import React, { Component } from 'react'
import API from "./utils/API";


class App extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        this.searchAPI();
    }

    searchAPI = () => {
        API.fetch()
            // .then(res => console.log(res))
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };

    render() {

        return (
            <div className="Table">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.map(result => (
                            <tr key={result.id.value}>
                                <td>{result.picture.thumbnail}</td>
                                <td>{result.name.first} {result.name.last}</td>
                                <td>{result.email}</td>
                                <td>{result.dob.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App