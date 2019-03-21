<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-brand">
                <router-link to="/">豆瓣电影</router-link>
            </div>
            <form class="navbar-form navbar-left">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="输入电影名称" v-model="searchKey">
                </div>
                <button type="submit" class="btn btn-default" @click="submit()">搜索</button>
            </form>
        </div><!-- /.container-fluid -->
    </nav> 
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            searchKey: '',
        }
    },
    methods: {
        submit(){
            if (this.searchKey) {
                // 搜索页面跳转
                // this.$router.push({
                //     path: '/search',
                //     query:{
                //         searchKey: this.searchKey
                //     }
                // });
                this.$router.push({
                    'name': 'Search',
                    params:{
                        searchKey: this.searchKey
                    }
                });
                this.searchKey = "";
            }else{
                alert('请输入搜索内容');
                return;
            }
        }
    },
}
</script>

<style>

</style>

