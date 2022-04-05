const root = document.getElementById("root");
import {MiniReact} from "./app/MiniReact.js";
import {Home} from "./app/components/Home.js";
import {interpolate} from "./utils/Interpolate";
import {prop_access} from "./utils/PropAccess";

String.prototype.interpolate = interpolate;
Object.prototype.prop_access = prop_access;

root.appendChild(
    MiniReact.createElement(Home)
);
