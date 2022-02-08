const events = ["click", "hover", "focus", "change", "keyup"];

const MiniReact = {
    Component: class Component {
        oldProps = null;
        state = {};

        constructor(initProps) {
            this.oldProps = initProps;
        }

        shouldUpdate(newProps) {
            return JSON.stringify(this.oldProps) !== JSON.stringify(newProps);
        };

        display(newProps = null) {
            if (this.shouldUpdate(newProps)) {
                this.oldProps = newProps;
                this.render();
            }
        }

    },
    createElement: function (element) {
        if (typeof element.type === "string") {
            let node = document.createElement(element.type);
            let props = element.props;
            let children = element.children;

            if (props) {
                for (let prop in props) {
                    if (events.includes(prop)) {
                        node.addEventListener(prop, props[prop]);
                    } else {
                        node.setAttribute(prop, props[prop]);
                    }
                }
            }
            if (children) {
                for (let child of children) {
                    if (child === undefined) continue;
                    if (typeof child === "string") {
                        node.appendChild(
                            document.createTextNode(child)
                        );
                    } else {
                        node.appendChild(this.createElement(child))
                    }
                }
            }
            return node;
        }
        else {
            //TODO: Management of component creation
        }
    }
};