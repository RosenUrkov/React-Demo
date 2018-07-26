// react functional component without JSX
const WelcomePlainReact = () => {
    return React.createElement('h1', null, 'Welcome');
};

// react functional component with JSX
const WelcomeJSX = () => {
    return (
        <h1>Welcome</h1>
    );
};

// react class component
class WelcomeClass extends React.Component {
    render() {
        return (
            <h1>Welcome</h1>
        );
    }
}

// react functional component with props
const Button = (props) => {
    return (
        <button type='button'>{props.buttonMessage}</button>
    );
};

// react class component with props and state
class ButtonClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: ButtonClass.colors[0] };
    }

    static get colors() {
        return ['red', 'green', 'yellow', 'blue'];
    }

    changeColor() {
        const newColor = ButtonClass.colors[Math.floor(Math.random() * ButtonClass.colors.length)];
        this.setState({ color: newColor });
    }

    render() {
        return (
            <button 
                type='button' 
                style={{ color: this.state.color }}
                onClick={() => this.changeColor()}
            >{this.props.buttonMessage}</button>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <WelcomePlainReact />
                <WelcomeJSX />
                <WelcomeClass />
                <Button buttonMessage={3 + 4} />
                <ButtonClass buttonMessage='Click me!' />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));