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
  export default {
    props: ['movieType'],// 接收父组件传过来的值 --in_theaters=正在上映的电影  --search==搜索电影
    data () {
      return {
        loading: true,
        title: '',
        list: [],
        totalItem:'',
        currentPage: 1,
        postData:{
          count: '18',
          start: '1'
        }
      }
    },
    mounted(){
      this.loadMovieList();
    },
    methods: {
      loadMovieList(){
        this.loading = true;
        // 如果是搜索进入，新增搜索关键字参数
        if (this.movieType == 'search') {
          params['q'] = this.$route.params.searchKey;
        }
        this.$http.post(this.api.inTheaters, this.postData).then((res) => {
          console.log(res.data)
          // debugger
          // 这里不做多校验，可自己加，直接上数据
          this.list = res.data.subjects;
          this.title = res.data.title;
          this.loading = false;
          this.totalItem = res.data.total;
        })
      },
      /** 修改页码 */
      handleCurrentChange(val) {
          this.postData.start = val;
          this.loadMovieList();
      },
      /** 单页显示数量 */
      handleSizeChange(val) {
          this.postData.count = val;
          this.loadMovieList();
      },
    }
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
