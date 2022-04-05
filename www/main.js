const root = document.getElementById("root");
import {MiniReact} from "./app/MiniReact.js";
import {Home} from "./app/components/Home.js";

String.prototype.interpolate = function () {
  return this;
};

root.appendChild(
    MiniReact.createElement(Home)
);
