
import Dropdown from '../components/Dropdown'
import TextInput from '../components/TextInput'
import EmailStyledField from '../components/EmailStyledField';
import TextArea from '../components/TextArea';

import schoolData from '../data/colleges.json';
import complaintsData from '../data/complaints.json';

class Generate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      schoolData,
      complaintsData
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.togglePages();
  }

  render() {
    return (
      <div>
        <EmailStyledField label="To:">
          <Dropdown label="School" list={this.state.schoolData}></Dropdown>
        </EmailStyledField>

        <EmailStyledField label="About:">
          <TextInput label="Student name"></TextInput>
        </EmailStyledField>
        <EmailStyledField label="Subject:">
          <Dropdown label="Complaint" list={this.state.complaintsData}></Dropdown>
        </EmailStyledField>

        <TextArea label="Message" content="Please click generate in order to generate a message" disabled={true}></TextArea>

        <div class="buttons is-right">
          <button class="button is-link" onClick={this.handleClick}>
            Generate
          </button>
        </div>
      </div>
    )
  }

}

export default Generate;
