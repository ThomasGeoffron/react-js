const root = document.getElementById("root");
import { MiniReact } from "./app/MiniReact.js";
import { MiniReactDOM } from "./app/MiniReactDOM.js";
import { Root } from "./app/components/Root.js";
import { interpolate } from "./utils/Interpolate.js";
import { prop_access } from "./utils/PropAccess.js";

String.prototype.interpolate = interpolate;
Object.prototype.prop_access = prop_access;

ReactDOM.render(React.createElement(Index), document.getElementById("root"));
