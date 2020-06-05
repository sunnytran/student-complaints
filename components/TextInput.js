
class TextInput extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="control">
                <input class="input" type="text" placeholder={this.props.label}></input>
            </div>
        );
    }

}

export default TextInput;
