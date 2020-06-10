<template>
    <Layout>
        <div>
            <h1>{{ $page.post.title }}</h1>
            <div v-html="$page.post.content"></div>
        </div>
    </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path:$path) {
    id
    title
    path
    content
  }
}
</page-query>

<script>
    export default {
        
    }
</script>

<style>
  .org-block {
    display: flex;
    align-items: center;
    padding: 50px 0;
    max-width: 940px;
    margin: 0 auto;
  }

  .org-block > p {
     margin: 0;
  }

  .org-block p img {
    width: 100%;
    margin-right: 30px;
  }

  .org-content {
    margin-left: 60px;
  }
</style>