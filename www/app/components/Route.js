import { MiniReact } from "../MiniReact.js";

export class Route extends MiniReact.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.createElement("div", null, [
      this.props.currentUri === this.props.uri
        ? this.createElement(this.props.component)
        : "",
    ]);
  }
}
