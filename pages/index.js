
import Head from 'next/head'
import Dropdown from '../components/Dropdown'
import TextInput from '../components/TextInput'
import EmailStyledField from '../components/EmailStyledField';
import TextArea from '../components/TextArea';
import Generate from './generate';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isShowingResults: true
    }

    this.togglePages = this.togglePages.bind(this);
  }

  togglePages() {
    this.setState({ isShowingResults: !this.state.isShowingResults });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Student Complaints</title>
          <link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css"></link>
          <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"></link>
        </Head>

        <div class="columns is-flex is-vcentered is-centered">
          <div class="column is-half">
  
            <div class="card">
              <header class="card-header has-background-grey-dark">
                <p class="card-header-title has-text-white">
                  Student Complaints
                </p>
              </header>
              <div class="card-content">
                <div class="content">

                  <Generate togglePages={this.togglePages}></Generate>
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
