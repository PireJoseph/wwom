const fs = require('fs');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.extension === 'svg') {
    fs.readFile(node.absolutePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
    createNodeField({
      node,
      name: 'content',
      value: data,
    });
  }
};
