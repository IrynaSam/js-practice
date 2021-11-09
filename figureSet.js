const Lighter = function ({ rootSelector, numberOfLights = 3 } = {}) {
  this._refs = this._getRefs(rootSelector);
  this.lights = numberOfLights;
  this._lightsContainer = this._lightsContainer(numberOfLights);
};
Lighter.prototype._light = function () {
  const light = document.createElement('div');
  light.classList.add('light');
  return light;
};
Lighter.prototype._lightsContainer = function (numberOfLights) {
  const lightsContainer = document.createElement('div');
  lightsContainer.classList.add('traffic-light');
  for (let i = 0; i < numberOfLights; i += 1) {
    const child = this._light();
    console.log(child);
    lightsContainer.appendChild(child);
  }
  console.log(lightsContainer);
  return lightsContainer;
};
Lighter.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.getElementById(rootSelector);
  console.log(refs.container);
  refs.container.appendChild(this._lightsContainer());
  console.log(refs);
  return refs;
};

const newLighter = new Lighter({
  rootSelector: 'traffic-light-container',
  numberOfLights: 3,
});
newLighter.lights;
console.log(newLighter.lights);
