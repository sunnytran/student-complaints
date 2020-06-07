
import Dropdown from '../components/Dropdown'
import TextInput from '../components/TextInput'
import EmailStyledField from '../components/EmailStyledField';
import TextArea from '../components/TextArea';

import schoolData from '../data/colleges.json';
import complaintsData from '../data/complaints.json';

class Results extends React.Component {

  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

//   handleClick() {
//     this.props.togglePages();
//   }

  render() {
    return (
      <div>
        <EmailStyledField label="To:">
          "List of schools"
        </EmailStyledField>

        <EmailStyledField label="About:">
          "Student name"
        </EmailStyledField>
        <EmailStyledField label="Subject:">
          "Complaint"
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
