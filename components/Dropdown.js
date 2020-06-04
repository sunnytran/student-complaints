
class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            label: this.props.label,
            list: this.props.list
        }
    }

    toggleDropdown() {
      this.setState({isActive: !this.state.isActive});
    }
    
    setDropdownLabel(i) {
      this.setState({label: i});
    }

    render() {
        return (
            <div class={"dropdown" + (this.state.isActive ? " is-active" : "")}>
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => this.toggleDropdown()}>
                <span>{this.state.label}</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                {
                  this.state.list.map(i => {
                    return (
                      <a href="#" class="dropdown-item" onClick={() => {
                          this.toggleDropdown();
                          this.setDropdownLabel(i);
                      }}>
                        {i}
                      </a>
                    );
                  })
                }
              </div>
            </div>
          </div>
        );
    }

}

export default Dropdown;
