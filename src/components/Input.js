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

  componentWillReceiveProps(nextProps){
    if (nextProps.count !== undefined && nextProps.count !== this.props.count) {
      this.setState({ count: nextProps.count });
    }
  }

  render() {
    return (
      <div className="column is-1-desktop is-3-mobile">
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
  count: PropTypes.number,
  grouping: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  updateTotal: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default Input;
