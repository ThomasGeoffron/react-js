import { MiniReact } from "../MiniReact.js";
import { Home } from "./Home.js";
import { Comment } from "./Comment.js";
import { Route } from "./Route.js";

export class Router extends MiniReact.Component {
  constructor(props) {
    super(props);
    this.state = { currentUri: location.hash.split("#")[1] };
    window.onhashchange = () => {
      console.log("path changed to " + location.hash.split("#")[1]);
      this.setState({ currentUri: location.hash.split("#")[1] });
    };
  }

  render() {
    return MiniReact.createElement("div", null, [
      MiniReact.createElement("header", null, [
        MiniReact.createElement("ul", null, [
          MiniReact.createElement(
            "li",
            {
              style: "cursor: pointer; color: blue;",
              click: () => {
                MiniReact.setPath("/");
              },
            },
            ["Accueil"]
          ),
          MiniReact.createElement(
            "li",
            {
              style: "cursor: pointer; color: blue;",
              click: () => {
                MiniReact.setPath("/meteo");
              },
            },
            ["Météo"]
          ),
          MiniReact.createElement(
            "li",
            {
              style: "cursor: pointer; color: blue;",
              click: () => {
                MiniReact.setPath("/commentaire");
              },
            },
            ["Commentaire"]
          ),
        ]),
      ]),
      MiniReact.createElement(Route, {
        currentUri: this.state.currentUri,
        uri: "/",
        component: Home,
      }),
      MiniReact.createElement(Route, {
        currentUri: this.state.currentUri,
        uri: "/meteo",
        component: Home,
      }),
      MiniReact.createElement(Route, {
        currentUri: this.state.currentUri,
        uri: "/commentaire",
        component: Comment,
      }),
    ]);
  }
}
