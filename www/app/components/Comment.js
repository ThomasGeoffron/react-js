import { MiniReact } from "../MiniReact.js";

export class Comment extends MiniReact.Component {
  state = {
    comments: [],
    newComment: ""
  };

  constructor(props) {
    super(props);
  }

  postComment = (event) => {
    if (this.state.newComment) {
      this.state.comments.push(this.state.newComment);
      this.state.newComment = "";
    }
  };

  onInput = (event) => {
    this.state.newComment = event.target.value;
  }

  render() {
    return MiniReact.createElement("div", null, [
        MiniReact.createElement("h1", null, ["Postez un commentaire !"]),
        MiniReact.createElement("input", { type: "text", id: "inputComment", input: this.onInput, value: this.state.newComment, placeholder: "Quoi de neuf ?" }),
        MiniReact.createElement("button", { click: this.postComment}, ["Poster"]),
        MiniReact.createElement("ul", null,
            this.state.comments.map((comment) => {
              MiniReact.createElement("li", null, [comment]);
            })
        )
    ]);
  }
}
