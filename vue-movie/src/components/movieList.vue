<template>
  <div class="container">
    <div class="canvas" v-show="loading">
      <div class="spinner"></div>
    </div>
    <h2>{{title}}</h2>
    <div class="row">
      <div class="col-md-2 text-center" v-for="item in list" :key="item.id">
        <router-link :to="{path:'/detail/'+item.id}">
          <img :src="item.images.medium">
          <div class="title">{{item.title}}</div>
        </router-link>
      </div>
    </div>

    <!-- 分页用的是element-ui -->
    <el-pagination
      style="text-align: right;margin-bottom: 20px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[18,36,54,72]"
      :page-size="10"
      layout="total,sizes, prev, pager, next, jumper"
      :total="totalItem">
    </el-pagination>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: mapGetters({
      loading: 'loading',
      title: 'title',
      list: 'list'
    }),
    props: ['movieType'],// 接收父组件传过来的值
    mounted(){
      if (this.movieType) {
        this.$store.dispatch('searchMovie', this.$route.params.searchKey);
      } else {
        this.$store.dispatch('getInTheaters');
      }
    },
    methods: mapActions([
      'searchMovie'
    ])
  }
</script>

<style scoped>
  img {
    width: 100%;
    height: 230px;
    vertical-align: middle;
  }
  .row > div {
    margin-bottom: 20px;
  }
  .title {
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
