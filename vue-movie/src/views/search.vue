<template>
  <div>
    <movie-list :movieType="searchKey" ref="updateList"></movie-list>
  </div>
</template>

<script>
import movieList from '@/components/movieList.vue'

export default {
    name: 'search',
    data () {
        return{
            searchKey: this.$route.params.searchKey,
        }
    },
    components:{
        movieList
    },
    watch: {
        // 监听路由，搜索页重复搜索的时候改变路由状态，页面重新加载，不监听的话组件实例会被复用
        '$route' (to, from) {
            const toDepth = to.path.split('/')
            const fromDepth = from.path.split('/')
            this.searchKey = toDepth[2]
            this.$refs.updateList.loadMovieList();
        }
    }
}
</script>