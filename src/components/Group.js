import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

class Group extends Component {
  render() {
    let { counts, currency, grouping } = this.props;
    var inputs = [];

    for(let key in currency) {
      let value = currency[key];
      inputs.push(<Input
        grouping={grouping}
        key={key}
        label={key}
        count={counts[value]}
        value={value}
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
  counts: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  grouping: PropTypes.string.isRequired,
  currency: PropTypes.object.isRequired,
  updateTotal: PropTypes.func.isRequired
};

export default Group;
