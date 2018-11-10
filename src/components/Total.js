import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Total extends Component {
  calculate_total = (values) => {
    var total = 0;

    for (let key in values) {
      total += key * values[key]
    }

    return '$' + total.toFixed(2);
  }

  render() {
    return (
      <div className="columns is-centered is-mobile">
        <div className="column is-3-desktop is-6-tablet is-8-mobile">
          <div className="box has-text-centered">
            <h1 className="title">{this.calculate_total(this.props.values)}</h1>
            <p className="subtitle">Total</p>
          </div>
        </div>
      </div>);
  }
}

Total.propTypes = {
  value: PropTypes.number.isRequired
};

export default Total;
