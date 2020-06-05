
class TextArea extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div class="field">
            <label class="label">{this.props.label}</label>
              <div class="control">
                <style jsx>{`
                  textarea {
                    resize: none;
                    width: 100%
                  }
                `}</style>

                <textarea rows="10" disabled={this.props.disabled}></textarea>
              </div>
          </div>
        );
    }

}

export default TextArea;
