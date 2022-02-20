const Hello = () => {
  const element = document.createElement('div');
  element.innerHTML = 'Hello World';
  return element;
};

document.body.appendChild(Hello());
console.log(1);
