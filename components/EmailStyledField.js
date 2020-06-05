
class EmailStyledField extends React.Component {

    constructor(props) {
        super(props);
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
            </div>
        );
    }

}

export default EmailStyledField;
