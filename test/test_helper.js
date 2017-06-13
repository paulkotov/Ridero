let chai = require('chai');
let chaiImmutable = require('chai-immutable');
let chaiEnzyme = require('chai-enzyme');
let jsdom = require('jsdom');

// testing immutable
chai.use(chaiImmutable);

// add enzyme
chai.use(chaiEnzyme());

// testing components
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.window.matchMedia = global.window.matchMedia || function () {
  return {
    matches:        false,
    addListener:    function () {
    },
    removeListener: function () {
    }
  };
};