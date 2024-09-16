const postcss = require('postcss');

module.exports = postcss.plugin('postcss-half-px', () => {
  return (root) => {
    root.walkDecls(decl => {
      if (decl.value.includes('px')) {
        decl.value = decl.value.replace(/(\d+)px/g, (match, p1) => {
          return `${p1 / 2}px`;
        });
      }
    });
  };
});