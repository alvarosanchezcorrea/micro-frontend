module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    ["@babel/preset-react", {runtime:"automatic"}]
  ];

  const plugins = [
    
  ];

  return {
    presets,
    plugins,
  };
};



module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-proposal-class-properties",
  ],
};