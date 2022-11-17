const { filterTokensByType } = require("./fns");
const tokens = require("./dist/css/global.json")

const colors = filterTokensByType('color', tokens)

module.exports = {
  content: [
    "index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    colors,
  },
  plugins: [],
}
