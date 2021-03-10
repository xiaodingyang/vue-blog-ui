<template>
  <div class="home">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="20" :md="20" :lg="16" :xl="16">
        <div class="container">
          <div class="header">
            <h2>Hi，欢迎你 ！</h2>
            <div class="line"></div>
            <div class="text ">
              --梦里醉酒，醒时折花。--
            </div>
            <div class=" search"></div>
          </div>
          <div class="body">
            <el-row :gutter="20" type="flex" justify="center">
              <el-col :xs="24" :sm="14" :md="14" :lg="14" :xl="17">
                <div class="banner">
                  <el-carousel
                    :interval="5000"
                    indicator-position="outside"
                    height="300px"
                  >
                    <el-carousel-item
                      v-for="(item, idx) in banner"
                      :key="idx"
                      :style="
                        `cursor:pointer;background:url(${item.url})no-repeat center/cover`
                      "
                      @click="$router.push(item.path)"
                    >
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <div
                  class="blog-list"
                  v-loading="loading"
                  element-loading-text="拼命加载中"
                  element-loading-spinner="el-icon-loading"
                  element-loading-background="rgba(0, 0, 0, 0.8)"
                >
                  <BlogItem
                    :data="item"
                    v-for="(item, idx) in blogList"
                    :key="idx"
                  ></BlogItem>
                  <div style="text-align: center;">
                    <el-button
                      :loading="buttonLoading"
                      style="width: 250px;margin: 20px 0;"
                      type="primary"
                      @click="loadMore"
                      >加载更多</el-button
                    >
                  </div>
                </div>
              </el-col>
              <el-col :xs="0" :sm="10" :md="10" :lg="10" :xl="7">
                <RightBar></RightBar>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RightBar from "../right-bar";
import BlogItem from "../blog-item";
export default {
  components: { RightBar, BlogItem },
  data() {
    return {
      blogList: [],
      loading: true,
      buttonLoading: false,
      curPage: 0,
    };
  },
  methods: {
    getBlog(params) {
      this.buttonLoading = true;
      this.$store.dispatch("getBlog", params).then((res) => {
        if (res) {
          this.loading = false;
          this.buttonLoading = false;
          this.blogList.push(...res);
        }
      });
    },
    loadMore() {
      this.curPage++;
      this.getBlog({ curPage: this.curPage, pageSize: 5 });
    },
  },
  created() {
    this.loadMore();
    this.$store.dispatch("getClass");
  },
  computed: {
    banner() {
      const list = this.blogList.filter((item, idx) => idx < 3);
      return list.map((item) => {
        if (item.src && item.src[0])
          return {
            url: item.src[0].url,
            path: "/blog/detail?id=" + item.id,
          };
      });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 0 15px;
}
.home {
  width: 100vw;
  height: 100vh;
  .banner-item {
    &::after {
      content: "";
      display: block;
      padding-bottom: 25%;
    }
  }
  .header {
    text-align: center;
    h2 {
      color: #fff;
      font-size: 30px;
      padding: 20px 0;
    }
    .line {
      height: 2px;
      width: 100%;
      background: -webkit-linear-gradient(left, #70df00, #44bffa);
    }
    .text {
      color: #fff;
      padding: 20px 0;
    }
  }
  .body {
    .blog-list {
      min-height: 300px;
      // background:#fff;
    }
  }
}
</style>
