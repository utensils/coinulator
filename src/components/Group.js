import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

class Group extends Component {
  render() {
    var inputs = [];

    for(let key in this.props.values) {
      inputs.push(<Input
        grouping={this.props.grouping}
        key={key}
        label={key}
        value={this.props.values[key]}
        updateTotal={this.props.updateTotal}
      />)
    }

    return (
      <div>
        <div className="has-text-centered">
          <h1 className="title is-4">{this.props.label}</h1>
        </div>
        <br/>
        <div className="columns is-centered is-mobile is-multiline">
          {inputs}
        </div>
      </div>);
  }
}

Group.propTypes = {
  grouping: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  updateTotal: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};

export default Group;
