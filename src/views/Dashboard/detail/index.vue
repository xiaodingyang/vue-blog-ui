<template>
  <div class="blog-detail">
    <div
      class="img"
      :style="
        `background: url(${detailData.src &&
          detailData.src[0] &&
          detailData.src[0].url}) no-repeat center/cover`
      "
    ></div>
    <el-row :gutter="20" type="flex" justify="center" class="container">
      <el-col :xs="24" :sm="21" :md="21" :lg="21" :xl="16">
        <div
          class="body"
          v-loading="markdownLoading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <div class="top" v-if="detailData.author">
            <div class="header">
              <div class="author">
                <span class="el-icon-s-custom" style="color:#04ac71"></span>
                <span style="font-size: 13px;">{{ detailData.author }}</span>
              </div>
              <div class="time">
                <span class="el-icon-time"></span>
                <span> {{ detailData.updateTime }}</span>
              </div>
            </div>
            <div class="title">{{ detailData.title }}</div>
            <div class="description">
              <span>描述：</span><span>{{ detailData.description }}</span>
            </div>
          </div>
          <div class="code" id="code">
            <!-- 
                        theme: 目前支持light、dark、oneDark、gitHub四种代码块风格
                        isPreview: 预览模式
                        exportFileName: 导出文件名称
                     -->
            <MarkdownPro
              theme="dark"
              :isPreview="true"
              :bordered="false"
              :value="detailData.content"
            ></MarkdownPro>
          </div>
        </div>
      </el-col>
      <!-- <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="4">
        <div class="catalog"></div>
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
import { getQuery } from "@/utils";
import { MarkdownPro } from "vue-meditor";

export default {
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐props⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  props: [],
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐组件注册⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  components: { MarkdownPro },
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐data数据⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  data() {
    return {
      detailData: {},
      blogClass: [],
      markdownLoading: false,
    };
  },
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐method方法⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  methods: {
    getDetail() {
      this.markdownLoading = true;
      const search = getQuery(location.search.slice(1));
      if (search && search.id) {
        this.$api.blog.getBlog(search).then((res) => {
          this.markdownLoading = false;
          if (res && res.list) this.detailData = res.list[0];
        });
      }
    },
  },
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐mounted方法⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  mounted() {
    this.$nextTick(() => {
      const aa = document.querySelectorAll("h1");
      console.log("aaaaa", aa);
    });
  },
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐created方法⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  created() {
    this.getDetail();
  },
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐watch监听属性⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  watch: {},
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐computed计算属性⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  computed: {},
};
</script>

<style scoped lang="scss">
.blog-detail {
  min-height: 100vh;
  // background: rgb(246, 246, 246);
  .container {
    padding: 15px;
  }
  .img {
    &::after {
      content: "";
      display: block;
      padding-bottom: 15%;
    }
  }

  .body {
    padding: 30px;
    background: #fff;
    border-radius: 5px;
    .top {
      border-bottom: 1px dashed #eee;
      padding-bottom: 20px;
      .description {
        color: #aaa;
      }
      .time {
        font-size: 13px;
        margin-left: 30px;
        line-height: 21px;
      }
      .header {
        display: flex;
        color: #aaa;
        .type {
          margin-left: 30px;
        }
      }
      .title {
        font-size: 30px;
        font-weight: bold;
        margin: 15px 0;
      }
      .code {
        width: 100%;
        min-height: 200px;
      }
    }
  }
  .catalog {
    height: 300px;
    background: blue;
  }
}
/deep/.markdown-theme-dark code:not(pre > code) {
  padding-left: 3px !important;
  padding-right: 3px !important;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 2px;
  margin: 0 2px !important;
}
/deep/.markdown {
  height: 100vh !important;
}
</style>
