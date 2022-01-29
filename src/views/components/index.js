import React from 'react';
import { hot } from 'react-hot-loader/root';

class Index extends React.Component {
    render() {
        return (
            <div style={{ color: 'purple' }}>
                <Header />
                <Content />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div style={{ color: 'purple' }}>
                <div>
                    <h1>Book Mark</h1>
                </div>
            </div>
        )
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            name: "",
            url: ""
        }
    }

    doChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    doSubmit = (e) => {
        e.preventDefault();
        this.setState({
            list: [
                ...this.state.list,
                {
                    name: this.state.name,
                    url: this.state.url
                }],
            name: "",
            url: ""
        });
    }

    render() {
        return (
            <div className="container">
                <div className="alert-primary">
                    <ul className="list-group">
                        {this.state.list.map((v) => (
                            <div>
                                <li className="list-group-item">{v.name}</li>
                                <li className="list-group-item">{v.url}</li>
                            </div>
                        ))}

                    </ul>
                    <div className="row">
                        <div className="input-group">
                            <input type="text" className="form-control col-4" name="name" value={this.state.name} placeholder="Name" onChange={this.doChange} />
                            <input type="text" className="form-control col-4" name="url" value={this.state.url} placeholder="Url" onChange={this.doChange} />
                        </div>
                        <button className="btn col-4" onClick={this.doSubmit}>Click</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(Index)
