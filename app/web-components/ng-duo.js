// hardcoded paths of the images of our 'web components' super heroes
var SUPER_HEROES = ['/images/superhero1.gif', '/images/superhero2.gif', '/images/superhero3.gif'];

function generateRandomNumber(range) {
    return Math.floor(Math.random() * range);
}


var proto = Object.create(HTMLElement.prototype);

// Called when an instance of the element is created
proto.createdCallback = function() {
    var src = this.hasAttribute('to-the-rescue') ? this.getAttribute('to-the-rescue') : "";

    // 1. Attach a shadow root on the element.
    var shadow = this.createShadowRoot();

    // 2. Get custom template
    var content = document.querySelector('link[rel="import"]').import
    var template = content.querySelector('#superhero');

    // 3. Set image source within the template
    template.content.querySelector('img').src = src;

    // 4. Clone the template
    var clone = template.content.cloneNode(true);

    // 3. Attach template clone to the shadow root
    shadow.appendChild(clone);

    // Register 'click' event listener for the image
    this.shadowRoot.querySelector('img').addEventListener('click', function(event) {
        var index = generateRandomNumber(SUPER_HEROES.length);
        var heroesOfTheHour = SUPER_HEROES[index];

        // update the attribute
        this.setAttribute('to-the-rescue', heroesOfTheHour);
    }.bind(this));
};

// Called when an attribute was added, removed, or updated
proto.attributeChangedCallback = function(attr, oldVal, newVal) {
    if (attr === 'to-the-rescue') {
        this.shadowRoot.querySelector('img').src = newVal;
    }
};

// Register the custom element
var XNgDuo = document.registerElement('x-ngduo', {prototype: proto});
