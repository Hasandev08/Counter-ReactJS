import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.colorChange()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <div>
            <button
              onClick={this.handleIncrement}
              className="btn btn-secondary btn-md m-1"
            >
              +
            </button>
            <button
              onClick={this.handleDecrement}
              className="btn btn-secondary btn-md m-1"
              disabled={this.state.value === 0 ? true : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.id)}
              className="btn btn-danger btn-md m-1"
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }

  colorChange() {
    let classes = "badge m-2 p-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
