import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counter.filter((c) => c.id !== counterId);
    this.setState({ counter: counters });
  };

  render() {
    return (
      <div>
        {this.state.counter.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            key={counter.id}
            id={counter.id}
            value={counter.value}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
