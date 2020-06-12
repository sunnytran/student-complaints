
import TextCopyField from '../components/TextCopyField'
import EmailStyledField from '../components/EmailStyledField';
import TextArea from '../components/TextArea';

class Results extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.togglePages();
  }

  render() {
    return (
      <div>
        <EmailStyledField label="To:">
          <TextCopyField label="School" value={this.props.schoolEmail}></TextCopyField>
        </EmailStyledField>

        <EmailStyledField label="About:">
          <TextCopyField label="Student name" value={this.props.studentName}></TextCopyField>
        </EmailStyledField>
        <EmailStyledField label="Subject:">
          <TextCopyField label="Complaint" value={this.props.complaint}></TextCopyField>
        </EmailStyledField>

        <TextArea content="Generated message goes here" disabled={true}></TextArea>

        <div class="buttons is-right">
          <button class="button is-link" onClick={this.handleClick}>
            Go back
          </button>
        </div>
      </div>
    )
  }

}

export default Results;
