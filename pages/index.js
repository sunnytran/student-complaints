
import Head from 'next/head'
import Dropdown from '../components/Dropdown'
import TextInput from '../components/TextInput'
import EmailStyledField from '../components/EmailStyledField';

class Index extends React.Component {

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
        <Head>
          <title>Student Complaints</title>
          <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css"></link>
          <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"></link>
        </Head>
  
        <div class="columns is-centered">
          <div class="column is-half">
  
            <div class="card">
              <header class="card-header has-background-grey-dark">
                <p class="card-header-title has-text-white">
                  Student Complaints
                </p>
              </header>
              <div class="card-content">
                <div class="content">
  
                  <EmailStyledField label="To:">
                    <Dropdown label="School" list={this.state.schools}></Dropdown>
                  </EmailStyledField>

                  <EmailStyledField label="About:">
                    <TextInput label="Student name"></TextInput>
                  </EmailStyledField>
                  <EmailStyledField label="Subject:">
                    <Dropdown label="Complaint" list={this.state.complaints}></Dropdown>
                  </EmailStyledField>

                  <div class="field">
                    <label class="label">Message</label>
                      <div class="control">
                        <textarea class="textarea is-medium" disabled></textarea>
                      </div>
                  </div>

                  <div class="buttons is-right">
                    <button class="button is-link">
                      Generate
                    </button>
                  </div>

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
