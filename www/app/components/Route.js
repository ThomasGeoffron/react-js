import { MiniReact } from "../MiniReact.js";

export class Route extends MiniReact.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return MiniReact.createElement("div", null, [
      this.oldProps.currentUri === this.oldProps.uri
        ? MiniReact.createElement(this.oldProps.component, null, [])
        : "",
    ]);
  }
}
