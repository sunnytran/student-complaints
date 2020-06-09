
class TextCopyField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="field has-addons">
                <div class="control">
                    <input class="input" type="text" placeholder={this.props.value} disabled></input>
                </div>
                <div class="control">
                    <a class="button is-grey-light">
                        Copy
                    </a>
                </div>
            </div>
        );
    }

}

export default TextCopyField;
