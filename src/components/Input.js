import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  state = {
    count: 0
  }

  handleBlur = (event) => {
    if (event.target.value === "") {
      this.setState({count: 0});
    }
  }

  handleChange = (event) => {
    this.setState({count: event.target.value});

    let intCount = parseInt(event.target.value);
    if (!isNaN(intCount)) {
      this.props.updateTotal(this.props.grouping, this.props.value, intCount);
    }
  }

  render() {
    let containerClasses = "column is-1-desktop is-3-mobile";

    return (
      <div className={containerClasses}>
        <div className="field has-text-centered">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input
              className="input is-large"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              min="0"
              type="number"
              value={this.state.count}/>
          </div>
        </div>
      </div>);
  }
}

Input.propTypes = {
  grouping: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mobileClassName: PropTypes.string,
  updateTotal: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default Input;
