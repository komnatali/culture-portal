const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return new Promise((resolve, reject) => {
    const photographer = path.resolve('src/components/photographer.js');
    resolve(
      graphql(`
        {
          allContentfulAuthors {
            edges {
              node {
                initials
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) reject(result.errors);

        result.data.allContentfulAuthors.edges.forEach((edge) => {
          const slug = edge.node.initials.split(',')[0];
          createPage ({
            path: slug,
            component: photographer,
            context: {
              initials: edge.node.initials,
            },
          });
        });
        return;
      })
    );
  });
};