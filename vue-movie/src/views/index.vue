<template>
    <div>
        <movie-list></movie-list>
    </div>
</template>

<script>
import movieList from '@/components/movieList.vue'

export default {
    name: 'index',
    data() {
        return {
        }
    },
    components:{
        movieList
    }
}
</script>

<style>

</style>
