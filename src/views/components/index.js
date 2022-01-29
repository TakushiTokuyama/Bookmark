import React from 'react';
import { hot } from 'react-hot-loader/root';

class Index extends React.Component {
    render() {
        return (
            <div style={{ color: 'purple' }}>
                <p>Heloo!</p>
                <Content />
            </div>
        )
    }
}

class Content extends React.Component {
    render(){
        return (
            <div>
                <p>content</p>
            </div>
        )
    }
}

export default hot(Index)
