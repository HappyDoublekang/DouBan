<template>
    <div>
        <movie-list :movie-type="movieType"></movie-list>
    </div>
</template>

<script>
import movieList from '@/components/movieList.vue'

export default {
    name: 'index',
    data() {
        return {
            movieType: 'in_theaters',
        }
    },
    components:{
        movieList
    }
}
</script>

<style>

</style>
