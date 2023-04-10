module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: [
        '>=0.25%',
        'ie 11',
        'last 2 versions',
        'not op_mini all'
      ],
      //grid: "autoplace",
      grid: true,
    }),
    require('postcss-object-fit-images')({}),
    // FIXME: Does inject elements but does not achieve the objective
    // require('postcss-aspect-ratio-polyfill')({}),
    require('postcss-custom-properties')({
      preserve: true,
    }),
  ]
};
