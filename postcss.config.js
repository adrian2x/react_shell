const path = require("path");

module.exports = {
  plugins: {
    autoprefixer: true,
    "postcss-normalize": true,
    "postcss-preset-env": true,
    stylelint: true,
    cssnano: {
      preset: [
        "default",
        {
          discardComments: { removeAll: true },
          mergeIdents: true,
        },
      ],
    },
  },
};
