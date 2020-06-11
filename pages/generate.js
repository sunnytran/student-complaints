
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
      complaintsData,
      schoolName: "",
      schoolEmail: "",
      studentName: "",
      complaint: null
    }

    this.handleClick = this.handleClick.bind(this);
    this.setSchoolEmail = this.setSchoolEmail.bind(this);
    this.setStudentName = this.setStudentName.bind(this);
    this.setComplaint = this.setComplaint.bind(this);
  }

  setSchoolEmail(e) {
    const selectedIndex = event.target.options.selectedIndex;
    
    this.setState({
      schoolName: event.target.options[selectedIndex].getAttribute('data-key'),
      schoolEmail: e.target.value
    });
  }

  setStudentName(e) {
    this.setState({studentName : e.target.value});
  }

  setComplaint(e) {
    const selectedIndex = event.target.options.selectedIndex;
    this.setState({complaint : event.target.options[selectedIndex].getAttribute('data-key')});
  }

  handleClick() {
    var hasError = false;

    if (this.state.schoolEmail == "") {
      this.refs.schoolDropdown.showError();
      hasError = true;
    }
    else
      this.refs.schoolDropdown.hideError();

    if (this.state.studentName.length <= 0 || this.state.studentName.length > 20) {
      this.refs.studentNameField.showError();
      hasError = true;
    }
    else
      this.refs.studentNameField.hideError();

    if (this.state.complaint == null) {
      this.refs.complaintDropdown.showError();
      hasError = true;
    }
    else
      this.refs.complaintDropdown.hideError();

    if (!hasError) {
      this.props.setValues(this.state.schoolName, this.state.schoolEmail, this.state.studentName, this.state.complaint);
      this.props.togglePages();
    }
  }

  render() {
    return (
      <div>
        <div>
          <EmailStyledField ref="schoolDropdown" errorMessage={"Please pick a school"} label="To:">
            <Dropdown label="School" list={this.state.schoolData} setValue={this.setSchoolEmail}></Dropdown>
          </EmailStyledField>

          <EmailStyledField ref="studentNameField" errorMessage={"Student name must be between 0 and 20 characters"} label="About:">
            <TextInput label="Student name" setValue={this.setStudentName}></TextInput>
          </EmailStyledField>
          <EmailStyledField ref="complaintDropdown" errorMessage={"Please pick a subject"} label="Subject:">
            <Dropdown label="Complaint" list={this.state.complaintsData} setValue={this.setComplaint}></Dropdown>
          </EmailStyledField>

          <b class="is-black">Message</b>
          <TextArea content="Please click generate in order to generate a message" disabled={true}></TextArea>

          <div class="buttons is-right">
            <button class="button is-link" onClick={this.handleClick}>
              Generate
            </button>
          </div>
        </div>
      </div>
    )
  }

}

export default Generate;
