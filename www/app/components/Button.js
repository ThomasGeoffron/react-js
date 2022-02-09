import { MiniReact } from "../MiniReact.js";

export class Button extends MiniReact.Component {
  constructor(props) {
    super(props);
    this.state.action = this.props.action;
  }

  render() {
    return MiniReact.createElement("button", {
      click: () => this.state.action,
    });
  }
}
