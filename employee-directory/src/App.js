import React, { Component } from 'react'
import API from "./utils/API";
import Table from "./components/Table"


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
            <div className="container">
                <Table resultData={this.state.results}/>
            </div>
        )
    }
}

export default App