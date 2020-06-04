
import Head from 'next/head'

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      complaintsIsActive: false,
      complaintLabel: "Complaint",
      complaints: [
        "Racist remarks",
        "Misconduct",
        "Sexual harassment"
      ]
    }
  }

  toggleComplaints() {
    this.setState({complaintsIsActive: !this.state.complaintsIsActive});
  }

  setComplaintLabel(i) {
    this.setState({complaintLabel: i});
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
  
                  <div class={"dropdown" + (this.state.complaintsIsActive ? " is-active" : "")}>
                    <div class="dropdown-trigger">
                      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => this.toggleComplaints()}>
                        <span>{this.state.complaintLabel}</span>
                        <span class="icon is-small">
                          <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                      <div class="dropdown-content">
                        {
                          this.state.complaints.map(i => {
                            return (
                              <a href="#" class="dropdown-item" onClick={() => {
                                  this.toggleComplaints();
                                  this.setComplaintLabel(i);
                              }}>
                                {i}
                              </a>
                            );
                          })
                        }
                      </div>
                    </div>
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
