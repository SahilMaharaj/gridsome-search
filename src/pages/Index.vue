<template>
  <Layout>
    <h1>Welcome</h1>

    <SearchPosts />
  
  </Layout>
</template>

<script>
import SearchPosts from '~/components/SearchPosts.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    SearchPosts
  }
}
</script>

<style scoped>

</style>
