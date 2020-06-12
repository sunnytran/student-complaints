
class TextArea extends React.Component {

    constructor(props) {
        super(props);

        this.areaValueRef = React.createRef();

        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard(e) {
      alert("HELLO");
      this.areaValueRef.current.select();
      document.execCommand('copy');
    }

    render() {
        return (
          <div class="field">
            <label class="label">{this.props.label}</label>
              <div class="control">
                <textarea ref={this.areaValueRef} class="textarea has-fixed-size" disabled={this.props.disabled} value={this.props.content}></textarea>
              </div>
          </div>
        );
    }

}

export default TextArea;
