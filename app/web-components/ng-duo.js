var proto = Object.create(HTMLElement.prototype);

// Called when an instance of the element is created
proto.createdCallback = function() {
    // set "toTheRescue" property
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
};

// Called when an attribute was added, removed, or updated
proto.attributeChangedCallback = function(attr, oldVal, newVal) {
    if (attr === 'to-the-rescue') {
        this.shadowRoot.querySelector('img').src = newVal;
    }
};

var NgDuo = document.registerElement('the-ng-duo', {prototype: proto});
