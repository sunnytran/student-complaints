
import TextCopyField from '../components/TextCopyField'
import EmailStyledField from '../components/EmailStyledField';
import TextArea from '../components/TextArea';

class Results extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  handleClick() {
    this.props.togglePages();
  }

  copyToClipboard() {
    this.refs.textAreaRef.copyToClipboard();
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

        <b class="is-black">Message</b><span class="is-pulled-right"><a href="#" onClick={this.copyToClipboard}>Copy</a></span>
        <TextArea content="Generated message goes here" ref="textAreaRef" disabled={true}></TextArea>

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
