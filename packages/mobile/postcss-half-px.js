const postcss = require('postcss');

module.exports = postcss.plugin('postcss-half-px', () => {
  return (root) => {
    root.walkDecls(decl => {
      if (decl.source?.input.file?.includes('node_modules')) {
        return;
      }
      if (decl.value.includes('px')) {
        decl.value = decl.value.replace(/(\d+)px/g, (_, p1) => `${p1 / 2}px`);
      }
    });
  };
});