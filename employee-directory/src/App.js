import React, { Component } from 'react'
import API from "./utils/API";
import Table from "./components/Table"
import Form from './components/Form'


class App extends Component {
    state = {
        results: [],
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
        const { results } = this.state

        return (
            <div className="container">
                <Form />
                <Table resultData={results}/>
            </div>
        )
    }
}

export default App