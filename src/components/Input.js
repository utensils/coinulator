import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  state = {
    count: 0
  }

  handleChange = (event) => {
    var latestCount = parseInt(event.target.value);
    this.setState({count: latestCount});

    this.props.updateTotal(this.props.value, latestCount);
  }

  render() {
    var containerClasses = "column is-1-desktop " + (this.props.mobileClassName || "is-4-mobile")

    return (
      <div className={containerClasses}>
        <div className="field has-text-centered">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input
              className="input is-large"
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
  label: PropTypes.string.isRequired,
  mobileClassName: PropTypes.string,
  updateTotal: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default Input;
