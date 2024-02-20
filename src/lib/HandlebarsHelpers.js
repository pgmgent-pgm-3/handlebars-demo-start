/* 
    This library contains custom Handlebars helpers
    that can be used in the Handlebars templates.
*/

import Handlebars from "handlebars";

export default {
  noop: function (options) {
    return options.fn(this);
  },
  bold: function (options) {
    const content = options.fn(this);

    // mark as safe string to prevent escaping
    return new Handlebars.SafeString(`<strong>${content}</strong>`);
  },
  button: function (className, type, options) {
    return new Handlebars.SafeString(
      `<button class='btn ${className}' type='${type}'>
        ${options.fn(this)}
      </button>`
    );
  },
  hyperlink: function (basepath, uri, options) {
    const label = options.fn(this);
    const url = `${basepath}/${uri}`;
    return new Handlebars.SafeString(`<a href='${url}'>${label}</a>`);
  },
};
