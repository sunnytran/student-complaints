
class EmailStyledField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isShowingError: false
        }

        this.showError = this.showError.bind(this);
        this.hideError = this.hideError.bind(this);
    }

    showError() {
        isShowingError = true;
    }

    hideError() {
        isShowingError = false;
    }

    render() {
        return (
            <div class="columns">
                <div class="column is-half">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">
                                {this.props.label}
                            </label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                {this.props.children}
                            </div>
                        </div>

                    </div>
                </div>
                <div class="column is-half">
                    <div class="field-label is-small has-text-left">
                        { this.state.isShowingError ? <p class="help is-danger">{this.props.errorMessage}</p> : null }
                    </div>
                </div>
            </div>
        );
    }

}

export default EmailStyledField;
