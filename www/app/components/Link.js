export function link(label, path) {
  return {
    type: "a",
    attributes: {
      href: path,
      onClick: (e) => {
        e.preventDefault();
        history.pushState({ title: label }, label, path);
        root.dispatchEvent(new Event("rerender"));
      },
    },
    children: [label],
  };
}
