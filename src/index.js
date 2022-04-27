import _ from "lodash";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "wwikucha"], " ");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
