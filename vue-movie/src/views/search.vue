<template>
  <div>
    <movie-list :movie-type="movieType" ref="updateList"></movie-list>
  </div>
</template>

<script>
export default {
    name: 'search',
    data () {
        return{
            searchKey: this.$route.params.searchKey,
        }
    },
    watch: {
        '$route' (to, from) {
            console.log(to,from)
            const toDepth = to.path.split('/')
            const fromDepth = from.path.split('/')
            console.log(toDepth)
            console.log(fromDepth)
            this.searchKey = toDepth[2]
        }
    }
}
</script>