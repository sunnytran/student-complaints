
class TextInput extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="field">
                <div class="control">
                    <input class="input is-rounded" type="text" placeholder={this.props.label}></input>
                </div>
            </div>
        );
    }

}

export default TextInput;
