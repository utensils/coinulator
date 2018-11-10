import React, { Component } from 'react';

import Input from './components/Input';
import Total from './components/Total';

class App extends Component {
  state = {}

  updateTotal = (value, quantity) => {
    this.setState({[value]: quantity});
  }

  render() {
    return (
      <div className="container has-text-centered">
        <Total values={this.state}/>

        <div className="columns is-centered is-mobile is-multiline">
          <Input label="$100" value={100} updateTotal={this.updateTotal} />
          <Input label="$50" value={50} updateTotal={this.updateTotal} />
          <Input label="$20" value={20} updateTotal={this.updateTotal} />
          <Input label="$10" value={10} updateTotal={this.updateTotal} />
          <Input label="$5" value={5} updateTotal={this.updateTotal} />
          <Input label="$1" value={1} updateTotal={this.updateTotal} />
        </div>
        <div className="columns is-centered is-mobile is-multiline">
          <Input label="$0.25" value={0.25} updateTotal={this.updateTotal} mobileClassName="is-3-mobile" />
          <Input label="$0.10" value={0.10} updateTotal={this.updateTotal} mobileClassName="is-3-mobile" />
          <Input label="$0.05" value={0.05} updateTotal={this.updateTotal} mobileClassName="is-3-mobile" />
          <Input label="$0.01" value={0.01} updateTotal={this.updateTotal} mobileClassName="is-3-mobile" />
        </div>
      </div>);
  }
}

export default App;
