import React, { Component } from 'react'
import API from "./utils/API";
import Table from "./components/Table"
import Form from './components/Form'


class App extends Component {
    state = {
        results: [],
        searchedName: "",
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

    handleSubmit = (name) => {
        this.setState({ searchedName: name.name })
    }

    render() {
        const { results } = this.state

        return (
            <div className="container">
                <Form handleSubmit={this.handleSubmit}/>
                <Table resultData={results}/>
            </div>
        )
    }
}

export default App