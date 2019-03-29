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
    props: ['movieType'],// 接收父组件传过来的值
    data () {
      return {
        loading: true,
        title: '',
        list: [],
        commonApi:'',
        totalItem: 0,
        currentPage: 1,
        postDate:{
          q: '',
          count: '18',
          start: '1'
        }
      }
    },
    watch: {
      movieType(newV,oldV){
        console.log(newV)
        if(newV){
          this.movieType = newV
        }
      }
    },
    created(){
      this.loadMovieList();
    },
    methods: {
      loadMovieList(){
        this.loading = true;
        let api;
        console.log(this.movieType)
        if(this.movieType){
          api = this.api.search;
          this.postDate.q = this.$route.params.searchKey
          // this.postDate.q = this.movieType
        }else{
          api = this.api.inTheaters;
        }
        this.$http.post(api, this.postDate).then((res) => {
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
