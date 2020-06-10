<template>
  <Layout>
    <h1>About</h1>
   
    <ul style="margin-top: 30px;">
      <li v-for="post in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
        <div>{{ post.node.desc }}</div>
      </li>
    </ul>
    
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost (order: DESC) {
    edges {
      node {
      	id
        title
        path
        desc
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "About"
  }
}
</script>

<style scoped>
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  ul li {
    background: grey;
    margin-right: 30px;
    margin-bottom: 30px;
    text-align: center;
    flex: 0.5;
    min-width: 40%;
  }

  ul li:nth-child(2n) {
    margin-right: 0;
  }
</style>
