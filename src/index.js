function render(reactElement, containerDOMElement) {
  // create a DOM element
  const domElement = document.createElement(reactElement.type);
  // update properties
  domElement.innerText = reactElement.children;
  // domElement.setAttribute('href', reactElement.props.href);
  for (const key in reactElement.props) {
    const value = reactElement.props[key];
    domElement.setAttribute(key, value);
  }

  // put it in the container
  containerDOMElement.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    id: 'another link',
    'data-number': 20,
    href: 'https//google.com',
  },
  children: 'Read more on Wikipedia',
};

const containerDOMElement = document.querySelector('#root');

render(reactElement, containerDOMElement);
