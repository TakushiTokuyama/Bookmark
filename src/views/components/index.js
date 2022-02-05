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
        // defaultの動作をキャンセルする
        e.preventDefault();

        if (this.state.name === "" && this.state.url === "") {
            return;
        }

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
                <div className="row">
                    {this.state.list.map((v) => (
                        <ul className="list-group list-group-horizontal">
                            <React.Fragment>
                                <li className="list-group-item">{v.name}</li>
                                <li className="list-group-item">{v.url}</li>
                            </React.Fragment>
                        </ul>
                    ))}
                </div>
                <div className="row">
                    <div className="input-group">
                        <input type="text" className="form-control col-4" name="name" value={this.state.name} placeholder="Name" onChange={this.doChange} />
                        <input type="text" className="form-control col-4" name="url" value={this.state.url} placeholder="Url" onChange={this.doChange} />
                    </div>

                </div>
                <button className="btn col-4 btn-primary" onClick={this.doSubmit}>Click</button>
            </div>
        )
    }
}

export default hot(Index)
