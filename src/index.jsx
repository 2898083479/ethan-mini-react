import React from "react";
import ReactDOM from "react-dom";
import NumberComp from "./Number";
import { createRoot } from "react-dom/client";

const arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push(i);
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <div
          onClick={() => {
            // setTimeout(() => {
            this.setState({ count: this.state.count + 1 });
            // }, 1000);
          }}
          className="animation"
        >{`count：${this.state.count}`}</div>
        {/* {arr.map((i) => (
          <NumberComp
            parentCount={this.state.count}
            key={"" + this.state.count + i}
            count={i}
          />
        ))} */}
      </>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Home />);
