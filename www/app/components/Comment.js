import { MiniReact } from "../MiniReact.js";

export class Comment extends MiniReact.Component {
  state = {
    comments: ["Salut !"],
    newComment: ""
  };

  constructor(props) {
    super(props);
    if (localStorage.getItem("comments")) {
        this.state.comments = JSON.parse(localStorage.getItem("comments"));
    }
  }

  postComment = (event) => {
    if (this.state.newComment) {
      let comments = this.state.comments;
      comments.push(this.state.newComment);
      this.setState({comments, newComment: ""});
      localStorage.setItem("comments", JSON.stringify(comments));
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
        MiniReact.createElement(
            "ul",
            null,
            this.state.comments.map((comment) =>
                MiniReact.createElement(
                    "li",
                    { style: "margin: 10px 0px 10px 0px;" },
                    [comment]
                )
            )
        )
    ]);
  }
}
