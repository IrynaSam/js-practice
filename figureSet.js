const Lighter = function({rootSelector, numberOfLights = 3, onUpdate = () => null,} = {}){
    this._refs = this._getRefs(rootSelector);
    this._lights = this._createLights(numberOfLights);
    this.onUpdate = onUpdate;
    // this._bindEvents();
}

Lighter.prototype._getRefs = function (rootSelector){
    const refs = {};
    refs.container = document.getElementById(rootSelector);
    console.log("🚀 ~ file: figureSet.js ~ line 10 ~ refs.container", refs.container)
    refs.lighterContainer = document.createElement('div');
    refs.lighterContainer.classList.add('traffic-light');
    
    
    refs.lighterContainer.appendChild(_createLights(this.numberOfLights))
    refs.container.appendChild(refs.lighterContainer);

    return refs;
}

Lighter.prototype._createLights = function (number){
    for(let i = 0; i < number; i += 1){
        const childEl = document.createElement('div');
        childEl.classList.add('light');
        
    }

    
}

 const lit = new Lighter({rootSelector: 'traffic-light-container', numberOfLights: 3, onUpdate: () => console.log('Это мой кастомный колбек для onUpdate')});
console.log(lit)