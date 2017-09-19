/*
  Automatically instantiates modules based on data-attributes
  specifying module file-names.
*/

const modules = ['hero-slider', 'poupon'];
const moduleElements = {};

// Set up node lists
modules.forEach(module => {
  let selector = `js-${module}`;
  moduleElements[module] = document.getElementsByClassName(selector);
});

for (let [module, elements] of Object.entries(moduleElements)) {
  const Module = require(`./${module}`).default;
  for (var el of elements) {
    new Module(el);
  }
}

/*
  Usage:
  ======
  html
  ----
  <button class="js-disappear">disappear!</button>
  --
  // modules/disappear.js
  export default class Disappear {
    constructor(el) {
      el.style.display = 'none'
    }
  }
*/
