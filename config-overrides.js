const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // "@input-hover-border-color" : "hsv(0, 0, 85%)",
      // "@input-focus-border-color" : "hsv(0, 0, 85%)",
      '@primary-color': '#3990a3',
      // '@heading-color': 'rgba(0, 0, 0, 0.9)',
      // '@text-color': 'rgba(0, 0, 0, 0.8)',
      // '@text-color-dark': 'rgba(0, 0, 0, 1)',
      // '@text-color-secondary': 'rgba(0, 0, 0, 0.7)',
      // '@text-color-secondary-dark': 'rgba(0, 0, 0, 0.8)',
      '@heading-color': 'fade(#000, 100%)',
      '@text-color': 'fade(#000, 85%)',
      '@text-color-secondary': 'fade(#000, 65%)',
      '@heading-color-dark': 'fade(#000, 100%)',
      '@text-color-dark': 'fade(#fff, 95%)',
      '@text-color-secondary-dark': 'fade(#fff, 85%)',
      '@disabled-color': 'fade(#000, 65%)',

      '@border-color-base': 'hsv(0, 0, 78%)',
      '@border-color-split': 'hsv(0, 0, 84%)',
      '@border-radius-base': '4px',
      "@font-family" : "\"Segoe UI\", \"Chinese Quote\", Tahoma, SansSerif, sans-serif",
    },
  }),
);
