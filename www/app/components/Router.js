import { React } from "../React/React.js";
import { Home } from "./Home.js";
import { Comment } from "./Comment.js";
import { Route } from "./Route.js";

export class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUri: location.hash.split("#")[1] };
    window.onhashchange = () => {
      console.log("path changed to " + location.hash.split("#")[1]);
      this.setState({ currentUri: location.hash.split("#")[1] });
    };
  }

  render() {
    return this.createElement("div", null, [
      this.createElement("header", null, [
        this.createElement("ul", [
          this.createElement(
            "li",
            {
              click: () => {
                this.setPath("/meteo");
              },
            },
            ["Météo"]
          ),
          this.createElement(
            "li",
            {
              click: () => {
                this.setPath("/commentaire");
              },
            },
            ["Commentaire"]
          ),
        ]),
      ]),
      this.createElement(Route, {
        currentUri: this.state.currentUri,
        uri: "/meteo",
        component: Home,
      }),
      this.createElement(Route, {
        currentUri: this.state.currentUri,
        uri: "/commentaire",
        component: Comment,
      }),
    ]);
  }
}
