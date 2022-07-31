const { addBabelPlugins, override } = require("customize-cra");
module.exports = override(
  ...addBabelPlugins([
    "babel-plugin-remove-react-jsx-attribute",
    { attributes: ["data-testid", /^(data-)/] },
  ])
);
