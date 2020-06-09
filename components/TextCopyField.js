
class TextCopyField extends React.Component {

    constructor(props) {
        super(props);

        this.fieldValueRef = React.createRef();

        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard(e) {
        this.fieldValueRef.current.select();
        document.execCommand('copy');
    }

    render() {
        return (
            <div class="field has-addons">
                <div class="control">
                    <input class="input" type="text" ref={this.fieldValueRef} value={this.props.value}></input>
                </div>
                <div class="control">
                    <a class="button is-grey-light" onClick={this.copyToClipboard}>
                        Copy
                    </a>
                </div>
            </div>
        );
    }

}

export default TextCopyField;
