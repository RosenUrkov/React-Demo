import React from 'react';
import ReactDOM from 'react-dom';

import style from './style.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className={style.header}>React with webpack!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));