
class TextArea extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="field">
            <label class="label">{this.props.label}</label>
              <div class="control">
                <textarea class="textarea is-medium" disabled={this.props.disabled}></textarea>
              </div>
          </div>
        );
    }

}

export default TextArea;
