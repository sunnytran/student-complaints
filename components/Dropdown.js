
class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list
        }
    }

    render() {
        return (
          <div class="select is-fullwidth">
            <select>
              <option value="" disabled selected>{this.props.label}</option>
              {
                this.state.list.map(i => {
                  const keys = Object.keys(i);

                  return (
                    <option value={i[keys[1]]}>
                      {i[keys[0]]}
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
