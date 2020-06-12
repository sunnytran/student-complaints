
class TextArea extends React.Component {

    constructor(props) {
        super(props);

        this.areaValueRef = React.createRef();

        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard(e) {
      this.areaValueRef.current.select();
      document.execCommand('copy');
    }

    render() {
        return (
          <div class="field">
            <b class="is-black">Message</b><span class="is-pulled-right"><a href="#" onClick={this.copyToClipboard}>Copy</a></span>
            <div class="control">
              <textarea ref={this.areaValueRef} class="textarea has-fixed-size" value={this.props.content}></textarea>
            </div>
          </div>
        );
    }

}

export default TextArea;
