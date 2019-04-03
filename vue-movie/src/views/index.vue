<template>
    <div>
        <movie-list :movieType="movieType"></movie-list>
    </div>
</template>

<script>
import movieList from '@/components/movieList.vue'

export default {
    name: 'index',
    data() {
        return {
            movieType: 'in_theaters'// 正在热映类型
        }
    },
    components:{
        movieList
    }
}
</script>

<style>

</style>
