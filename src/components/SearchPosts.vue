<template>
    <div>
        <form> 
            <input 
            id="search" 
            v-model="searchTerm" 
            type="search" 
            placeholder="Search">
            <button @click.stop.prevent="submit()">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                searchTerm: this.$route.query.q || ''
                    }
            },
        methods: {
            submit () {
                const searchTerm = this.searchTerm
                if (searchTerm.length > 1)
                return this.$router.push("/search/?q=" + this.searchTerm);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>