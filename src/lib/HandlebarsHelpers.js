/**
 * A module with custom block helpers
 */

import Handlebars from "handlebars";

export default {
  em: (options) => `<em>${options.fn()}</em>`,

  bold: (options) => `<strong>${options.fn({ firstname: "Tim" })}</strong>`,

  link: (text, url, target) => `<a href="${url}" target="${target}">${text}</a>`,

  button: (use, options) => {
    const validUse = ["primary", "secondary", "tertiary"];

    if(validUse.includes(use)) {
      return `<button class="${use}" type="button">${options.fn()}</button>`
    } else {
      console.log(options)
      // return `<button type="button">${options.fn()}</button>`
    }
  },

  sum: (a, b) => a + b,

  customIf: () => {

  }
}