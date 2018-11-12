import React, { Component } from 'react';

import Group from './components/Group';
import Total from './components/Total';

class App extends Component {
  currencies = {
    "EUR": {
      banknotes: { "€500": 500, "€200": 200, "€100": 100, "€50": 50, "€20": 20, "€10": 10, "€5": 5, "€1": 1 },
      coins: { "€2": 2, "€1": 1, "€0.50": 0.50, "€0.20": 0.20, "€0.10": 0.10, "€0.05": 0.05, "€0.02": 0.02, "€0.01": 0.01 },
      format: { "symbol": "€", "percision": 2 }
    },
    "USD": {
      banknotes: { "$100": 100, "$50": 50, "$20": 20, "$10": 10, "$5": 5, "$2": 2, "$1": 1 },
      coins: { "$1": 1, "$0.50": 0.50, "$0.25": 0.25, "$0.10": 0.10, "$0.05": 0.05, "$0.01": 0.01 },
      format: {
        banknotes: "Dollars",
        coins: "Cents",
        symbol: "$",
        percision: 2 }
    }
  }

  state = {
    code: "USD",
    values: {
      banknotes: {},
      coins: {}
    }
  }

  handleClear = (event) => {
    event.preventDefault();

    this.setState({
      values: {
        banknotes: this.zeroValues(this.state.values.banknotes),
        coins: this.zeroValues(this.state.values.coins)
      }
    })
  }

  zeroValues = (values) => {
    for(let key in values) {
      values[key] = 0;
    }

    return values;
  }

  updateTotal = (grouping, value, quantity) => {
    var { values } = this.state;
    values[grouping][value] = quantity;
    this.setState({ values: values });
  }

  render() {
    let { code, values } = this.state;
    let currency = this.currencies[code];

    return (
      <div className="container has-text-centered">
        <Total format={currency.format} values={values}/>
        <Group
          counts={values.banknotes}
          grouping="banknotes"
          label={currency.format.banknotes}
          currency={currency.banknotes}
          updateTotal={this.updateTotal} />
        <hr />
        <Group
          counts={values.coins}
          grouping="coins"
          label={currency.format.coins}
          currency={currency.coins}
          updateTotal={this.updateTotal} />
        <br />
        <button className="button is-danger" onClick={this.handleClear}>
          <span>Clear</span>
          <span className="icon is-small">
            <i className="fas fa-times"></i>
          </span>
        </button>
      </div>);
  }
}

export default App;
