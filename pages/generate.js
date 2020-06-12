
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
      message: "",
      complaint: null
    }

    this.setSchoolEmail = this.setSchoolEmail.bind(this);
    this.setStudentName = this.setStudentName.bind(this);
    this.setComplaint = this.setComplaint.bind(this);
    this.generateMessage = this.generateMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setSchoolEmail(e) {
    const selectedIndex = event.target.options.selectedIndex;
    
    this.setState({
      schoolName: event.target.options[selectedIndex].getAttribute('data-key'),
      schoolEmail: e.target.value
    });

    this.refs.schoolDropdown.hideError();
  }

  setStudentName(e) {
    var str = e.target.value;
    if (str.length >= 0 && str.length <= 20)
      this.refs.studentNameField.hideError();
    else
      this.refs.studentNameField.showError();

    this.setState({studentName : str});
  }

  setComplaint(e) {
    const selectedIndex = event.target.options.selectedIndex;
    this.setState({complaint : event.target.options[selectedIndex].getAttribute('data-key')});

    this.refs.complaintDropdown.hideError();
  }

  generateMessage() {
    var message = "";

    for (var i = 0; i < complaintsData.length; i++) {
      if (complaintsData[i]["Complaint"] == this.state.complaint) {
        var components = complaintsData[i]["Message-Components"];

        var intros = components["intro"];
        message += intros[Math.floor(Math.random() * intros.length)] + " ";

        var bodies = components["body"];
        message += bodies[Math.floor(Math.random() * bodies.length)] + " ";

        var conclusions = components["conclusion"];
        message += conclusions[Math.floor(Math.random() * conclusions.length)];
      }
    }

    message = message.replace("\{NAME\}", this.state.studentName, 'g');
    message = message.replace("\{COLLEGE\}", this.state.schoolName, 'g');
    if (this.state.studentName.endsWith("s"))
      message = message.replace(this.state.studentName + "'s", this.state.studentName + "'", 'g');
      if (this.state.schoolName.endsWith("s"))
      message = message.replace(this.state.schoolName + "'s", this.state.schoolName + "'", 'g');

    return message;
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
      this.state.message = this.generateMessage();
      this.props.setValues(this.state.schoolName, this.state.schoolEmail, this.state.studentName, this.state.complaint, this.state.message);
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

          <EmailStyledField ref="studentNameField" errorMessage={"Student name must be between 1 and 20 characters"} label="About:">
            <TextInput label="Student name" setValue={this.setStudentName}></TextInput>
          </EmailStyledField>
          <EmailStyledField ref="complaintDropdown" errorMessage={"Please pick a subject"} label="Subject:">
            <Dropdown label="Complaint" list={this.state.complaintsData} setValue={this.setComplaint}></Dropdown>
          </EmailStyledField>

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
