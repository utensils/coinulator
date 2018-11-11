import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Total extends Component {
  grand_total = (values) => {
    let { banknotes, coins} = values;
    let { percision, symbol } = this.props.format;

    var total = this.sub_total(banknotes) + this.sub_total(coins);

    return symbol + total.toFixed(percision);
  }

  sub_total = (values) => {
    var total = 0;
    for (let key in values) {
      total += key * values[key];
    }
    return total;
  }

  render() {
    return (
      <div className="columns is-centered is-mobile">
        <div className="column is-3-desktop is-6-tablet is-8-mobile">
          <div className="box has-text-centered">
            <h1 className="title">{this.grand_total(this.props.values)}</h1>
            <p className="subtitle">Total</p>
          </div>
        </div>
      </div>);
  }
}

Total.propTypes = {
  format: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired
};

export default Total;
