module.exports = {
  modules: true,
  plugins: require("@spectrum-css/component-builder/css/processors").processors.concat(
    [
      require("postcss-logical")(),
      require("postcss-dir-pseudo-class")(),

      // Use the hover media query in the docs because of SSR - some components have no client JS available.
      // Otherwise, convert :hover to .is-hovered.
      process.env.DOCS_ENV ? require("./lib/postcss-hover-media") : require("./lib/postcss-hover-class"),
    ]
  ),
};
