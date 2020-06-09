
import Dropdown from '../components/Dropdown'
import TextCopyField from '../components/TextCopyField'
import EmailStyledField from '../components/EmailStyledField';
import TextArea from '../components/TextArea';

import schoolData from '../data/colleges.json';
import complaintsData from '../data/complaints.json';

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
          <TextCopyField label="School"></TextCopyField>
        </EmailStyledField>

        <EmailStyledField label="About:">
          <TextCopyField label="Student name"></TextCopyField>
        </EmailStyledField>
        <EmailStyledField label="Subject:">
          <TextCopyField label="Complaint"></TextCopyField>
        </EmailStyledField>

        <TextArea label="Message" content="Generated message goes here" disabled={true}></TextArea>

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
