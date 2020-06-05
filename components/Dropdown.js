
class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list
        }
    }

    render() {
        return (
          <div class="select is-rounded">
            <select>
              <option value="" disabled selected>{this.props.label}</option>
              {
                this.state.list.map(i => {
                  return (
                    <option value={i}>
                      {i}
                    </option>
                  );
                })
              }
            </select>
          </div>
        );
    }

}

export default Dropdown;
