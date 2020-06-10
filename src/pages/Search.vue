<template>
    <Layout>
        <div>
            <h1>Search</h1>
               
            <form> 
                <input 
                id="search" 
                v-model="searchTerm" 
                type="search" 
                placeholder="Search"
                >
                <button @click.stop.prevent="submit()">Submit</button>
            </form>
                
                <br>
                <br>

            <ul class="results-list">
                <li v-for="result in searchResults" :key="result.id" class="navbar-item">
                    <g-link :to="result.path">
                        <h3>{{ result.title }}</h3>
                    </g-link>
                        <p>{{ result.desc }}</p>
                </li>

                <span :class="noResultDisplay" class="hide-results-ms">
                     No results for <b>{{ foundNone }}.</b>
                </span>

            </ul>
                
        </div>
    </Layout>
</template>

<script>
export default {
    data () {
        return {
            searchTerm: this.$route.query.q || '',
        }
    },
    methods: {
        submit () {
            const searchTerm = this.searchTerm
            if (searchTerm.length > 1)
            return this.$router.push("/search/?q=" + this.searchTerm);
        }
    },
    computed: {
        searchResults () {
            const searchTerm = this.searchTerm
            if (searchTerm.length < 2) return [];
            return this.$search.search({query: searchTerm})
        },
        foundNone () {
            const searchResults = this.searchResults
            if (searchResults.length < 1 )
            return this.searchTerm
        },
        noResultDisplay () {
            const searchTerm = this.searchTerm
            const searchResults = this.searchResults
            if (searchTerm.length > 0 && searchResults.length < 1)
            return "show-results-ms"
        }
    }
// CUSTOM FILTER   computed: {
//       filteredBlogs() {
//           return this.$page.posts.edges.filter((post) => {
//               return post.node.title.toLowerCase().match(this.searchTerm.toLowerCase()) || post.node.desc.toLowerCase().match(this.searchTerm.toLowerCase())
//           });
//       }
//   }
}
</script>

<style scoped>
ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  h3 {
      margin: 0;
  }

  ul li {
    background: grey;
    margin-bottom: 30px;
    flex: 0.5;
    min-width: 40%;
    padding: 30px;
  }

  .hide-results-ms {
      display: none;
  }

  .show-results-ms {
      display: block;
  }

  
</style>