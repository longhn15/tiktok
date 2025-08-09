/* config-overrides.js */
// file này để ghi đè(overide) webpack
const {
  override, useBabelRc
} = require("customize-cra");

module.exports = override(
  useBabelRc()
);