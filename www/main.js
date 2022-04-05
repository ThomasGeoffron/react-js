const root = document.getElementById("root");
import { MiniReact } from "./app/MiniReact.js";
import { MiniReactDOM } from "./app/MiniReactDOM.js";
import { Router } from "./app/components/Router.js";
import { interpolate } from "./utils/Interpolate.js";
import { prop_access } from "./utils/PropAccess.js";

String.prototype.interpolate = interpolate;
Object.prototype.prop_access = prop_access;

MiniReactDOM.render(
  MiniReact.createElement(Router),
  document.getElementById("root")
);
