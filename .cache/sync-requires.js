const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-photographer-js": hot(preferDefault(require("D:\\work\\tst\\culture-portal\\src\\components\\photographer.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\work\\tst\\culture-portal\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\work\\tst\\culture-portal\\src\\pages\\index.js"))),
  "component---src-pages-photographers-list-js": hot(preferDefault(require("D:\\work\\tst\\culture-portal\\src\\pages\\photographers-list.js")))
}

