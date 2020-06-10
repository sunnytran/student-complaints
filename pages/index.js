
import Head from 'next/head'
import Generate from './generate';
import Results from './results';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isShowingResults: false,
      schoolName: "",
      schoolEmail: "",
      studentName: "",
      complaint: ""
    }

    this.togglePages = this.togglePages.bind(this);
    this.setValues = this.setValues.bind(this);
  }

  togglePages() {
    this.setState({ isShowingResults: !this.state.isShowingResults });
  }

  setValues(schoolName, schoolEmail, studentName, complaint) {
    this.setState({
      schoolName: schoolName,
      schoolEmail: schoolEmail,
      studentName: studentName,
      complaint: complaint
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Student Complaints</title>
          <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css"></link>
          <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"></link>
          <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css"></link>
        </Head>

        <div class="columns is-flex is-vcentered is-centered">
          <div class="column is-half">
  
            <div class="card is-grey-lighter">
              <header class="card-header has-background-grey-dark">
                <p class="card-header-title has-text-white">
                  Student Complaints
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  { this.state.isShowingResults ? null : <Generate togglePages={this.togglePages} setValues={this.setValues}></Generate> }
                  { this.state.isShowingResults ?
                    <Results togglePages={this.togglePages} 
                      schoolName={this.state.schoolName}
                      schoolEmail={this.state.schoolEmail}
                      studentName={this.state.studentName}
                      complaint={this.state.complaint}>
                    </Results> : null
                  }
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    )
  }

}

export default Index;
