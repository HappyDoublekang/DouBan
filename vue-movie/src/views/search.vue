<template>
    <div>
        {{searchKey}}
    </div>
</template>

<script>
export default {
    name: 'search',
    data () {
        return{
            searchKey: this.$route.params.searchKey,
        }
    }
}
</script>