// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Playground',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {
          // remark options
        }
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
      collections: [
        {
          typeName: 'Post',
          indexName: 'Post',
          fields: ['title', 'desc']
        }
      ],
      searchFields: ['title', 'desc']
      },
    }
  ],
  templates: {
    Post: '/blog/:title'
  }
}
