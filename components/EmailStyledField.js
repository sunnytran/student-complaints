
class EmailStyledField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="field">
                <div class="columns">
                    <div class="column is-one-third">

                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

}

export default EmailStyledField;
