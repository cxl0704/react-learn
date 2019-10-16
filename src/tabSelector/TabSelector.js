import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import "./TabSelector.css";

export  class TabSelector extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: null,
    options: [],
    onChange: () => {}
  };

  render() {
    //const { options, value, onChange } = this.props;
    return (
      <div className="tab-selector">
        <ul>
          {options.map(opt => (
            <li
              key={opt.value}
              className={`tab-item ${
                opt.value === this.props.value ? "selected" : ""
              }`}
              onClick={() => this.props.onChange(opt.value)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const options = [
  { name: "Red", value: "Red" },
  { name: "Blue", value: "Blue" },
  { name: "Orange", value: "Orange" }
];

export default class TabSelectorSample extends PureComponent {
  state = {
    color: null
  };
  render() {
    return (
      <div>
        Select color:{" "}
        <TabSelector
          options={options}
          value={this.state.color}
          onChange={c => this.setState({ color: c })}
        />
      </div>
    );
  }

}
