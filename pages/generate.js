
import Dropdown from '../components/Dropdown'
import TextInput from '../components/TextInput'
import EmailStyledField from '../components/EmailStyledField';
import TextArea from '../components/TextArea';

class Generate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      schools: [
        "University of Houston",
        "University of Texas"
      ],
      complaints: [
        "Racist remarks",
        "Misconduct",
        "Sexual harassment"
      ]
    }
  }

  render() {

    return (
      <div>
        <EmailStyledField label="To:">
          <Dropdown label="School" list={this.state.schools}></Dropdown>
        </EmailStyledField>

        <EmailStyledField label="About:">
          <TextInput label="Student name"></TextInput>
        </EmailStyledField>
        <EmailStyledField label="Subject:">
          <Dropdown label="Complaint" list={this.state.complaints}></Dropdown>
        </EmailStyledField>

        <TextArea label="Message" disabled={true}></TextArea>

        <div class="buttons is-right">
          <button class="button is-link">
            Generate
          </button>
        </div>
      </div>
    )
  }

}

export default Generate;
