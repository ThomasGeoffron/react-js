const MiniReact = {
    Component: class Component {
        oldProps = null;
        state = {};

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
    createElement: function () {

    }
};