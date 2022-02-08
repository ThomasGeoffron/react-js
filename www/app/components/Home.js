import { MiniReact } from "../MiniReact";

export class Home extends MiniReact.Component {
  constructor() {
    super(props);
  }

  render() {
    return MiniReact.createElement("div", null, [
      MiniReact.createElement("h1", null, ["Bienvenue sur M&T&O !"]),
      MiniReact.createElement(
        "p",
        { style: "font-style: italic; color: darkgrey;" },
        [
          "Sélectionnez la ville dont vous souhaitez connaître les informations météorologique",
        ]
      ),
      MiniReact.createElement(Cities, null),
    ]);
  }
}
