import React, { Component } from 'react'
import API from "./utils/API";
import Table from "./components/Table"

class App extends Component {
    state = {
        results: [],
        filteredResults: [],
        name: "",
    };

    componentDidMount() {
        this.searchAPI();
    }

    searchAPI = () => {
        API.fetch()
            // .then(res => console.log(res))
            .then(res => this.setState({ ...this.state, results: res.data.results, filteredResults: res.data.results }))
            .catch(err => console.log(err));
    };

    setName = (e) => {
        let tempResults = this.state.results.filter(emp => { return emp.name.first.includes(e) || emp.name.last.includes(e)} )
        this.setState({...this.state, name:e, filteredResults: tempResults});
        // console.log(this.state.filteredResults);

    }

    render() {
        const { filteredResults } = this.state

        return (
            <div className="container">
                <form>
                    <label htmlFor="name">Search:</label>
                    <span> </span>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={e => this.setName(e.target.value)} />
                </form>
                <Table resultData={filteredResults} />
            </div>
        )
    }
}

export default App