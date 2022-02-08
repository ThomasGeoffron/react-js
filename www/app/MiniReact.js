const events = ["click", "hover", "focus", "change", "keyup"];

export const MiniReact = {
  Component: class Component {
    oldProps = null;
    state = {};

    constructor(initProps) {
      this.oldProps = initProps;
    }

    shouldUpdate(newProps) {
      return JSON.stringify(this.oldProps) !== JSON.stringify(newProps);
    }

    display(newProps = null) {
      if (this.shouldUpdate(newProps)) {
        this.oldProps = newProps;
      }
      return this.render();
    }
  },
  createElement: function (element, props, children) {
    if (typeof element === "string") {
      let node = document.createElement(element);

      if (props) {
        for (let prop in props) {
          if (events.includes(prop)) {
            //console.log(prop);
            node.addEventListener(prop, props[prop]);
          } else {
            node.setAttribute(prop, props[prop]);
          }
        }
      }
      if (children) {
        for (let child of children) {
          //console.log(typeof child)
          if (child === undefined) continue;
          if (typeof child === "string") {
            node.appendChild(document.createTextNode(child));
          } else {
            node.appendChild(child);
          }
        }
      }
      return node;
    } else {
      //TODO: Management of component creation
      let component = new element(props);

      return component.display(props);
    }
  },
};
