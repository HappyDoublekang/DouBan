<template>
  <div>
    <!-- <movie-list :movieType="this.$route.params.searchKey" ref="updateList"></movie-list> -->
    <!-- 直接把this.$route.params.searchKey传给子组件用props接收可以用watch监听到变化 -->
    <movie-list :movieType="searchKey" ref="updateList"></movie-list>
    <!-- watch只能监听产生变化的数据，这种写法data只初始化一次不刷新传给子组件watch监听不到 -->
  </div>
</template>

<script>
import movieList from '@/components/movieList.vue'

export default {
    name: 'search',
    data () {
        return{
            searchKey: this.$route.params.searchKey,
            // watch只能监听产生变化的数据，这种写法data只初始化一次不刷新传给子组件watch监听不到
        }
    },
    components:{
        movieList
    },
    watch: {
        // 监听路由，搜索页重复搜索的时候改变路由状态，页面重新加载，不监听的话组件实例会被复用
        '$route' (to, from) {
            // const toDepth = to.path.split('/')
            // const fromDepth = from.path.split('/')
            // this.searchKey = toDepth[2]
            // 防止返回重复调用
            if (to.path.indexOf('/search/') == 0) {
                // 调用子组件方法
                this.$refs.updateList.searchMovie(this.$route.params.searchKey);
            }
        }
    }
}
</script>