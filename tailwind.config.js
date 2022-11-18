const { filterTokensByType } = require("./fns");
const tokens = require("./dist/css/global.json")

const colors = filterTokensByType('color', tokens)

module.exports = {
  content: [
    "index.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors,
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
