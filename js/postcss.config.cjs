module.exports = {
  plugins: [
    require("postcss-import")({}),
    require("postcss-combine-duplicated-selectors")(),
  ],
};
