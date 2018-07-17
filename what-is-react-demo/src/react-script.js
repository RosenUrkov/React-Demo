class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }

    render() {
        if (this.state.clicked) {
            return (<div>You clicked button number {this.props.buttonNumber}</div>);
        }

        return (<button onClick = { () => this.setState({ clicked: true }) }> Click </button>);
    }
}

class ButtonsHolder extends React.Component {
    render() {
      return (
        <div>
            <Button buttonNumber={1} />
            <br />
            <Button buttonNumber={2} />
            <br />
            <Button buttonNumber={3} />
            <br />
        </div>
      );
    }
}

ReactDOM.render(<ButtonsHolder />, document.getElementById('react-root'));