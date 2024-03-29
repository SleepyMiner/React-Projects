const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click to visit Google",
};

const customRender = (reactElement, container) => {
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;
  /*domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);*/ //This code is using repetitive step
  for (const prop in reactElement.props) {
    if (prop === "Children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
