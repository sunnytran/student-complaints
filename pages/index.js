
import Head from 'next/head'

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      complaints: {
        isActive: false,
        label: "Complaint",
        list: [
          "Racist remarks",
          "Misconduct",
          "Sexual harassment"
        ]
      },
      schools: {
        isActive: false,
        label: "School",
        list: [
          "University of Houston",
          "University of Texas (Austin)"
        ]
      }
    }
  }

  toggleDropdown(dropdown) {
    dropdown.isActive = !dropdown.isActive;
    this.setState({dropdown: dropdown});
  }

  setDropdownLabel(dropdown, label) {
    dropdown.label = label;
    this.setState({dropdown: dropdown});
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
  
                  <div class={"dropdown" + (this.state.schools.isActive ? " is-active" : "")}>
                    <div class="dropdown-trigger">
                      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => this.toggleDropdown(this.state.schools)}>
                        <span>{this.state.schools.label}</span>
                        <span class="icon is-small">
                          <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                      <div class="dropdown-content">
                        {
                          this.state.schools.list.map(i => {
                            return (
                              <a href="#" class="dropdown-item" onClick={() => {
                                  this.toggleDropdown(this.state.schools);
                                  this.setDropdownLabel(this.state.schools, i);
                              }}>
                                {i}
                              </a>
                            );
                          })
                        }
                      </div>
                    </div>
                  </div>

                  <div class={"dropdown" + (this.state.complaints.isActive ? " is-active" : "")}>
                    <div class="dropdown-trigger">
                      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => this.toggleDropdown(this.state.complaints)}>
                        <span>{this.state.complaints.label}</span>
                        <span class="icon is-small">
                          <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                      <div class="dropdown-content">
                        {
                          this.state.complaints.list.map(i => {
                            return (
                              <a href="#" class="dropdown-item" onClick={() => {
                                  this.toggleDropdown(this.state.complaints);
                                  this.setDropdownLabel(this.state.complaints, i);
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
