/**
 * Component dependencies.
 */

var domify = require('domify');

/**
 * Expose `create`
 */

module.exports = create;

/**
 * create
 */

function create (element) {

  element.create = function (html) {
    var el = domify(html);
    return element(el);
  };

  return element;
}
