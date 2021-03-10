<template>
  <div class="tags">
    <el-row :gutter="20" type="flex" justify="center" class="container">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="18">
        <div class="content">
          <div class="nav">
            <div>
              <p
                class="nav-item"
                v-for="(item, idx) in blogClass"
                :key="idx"
                @click="clickClass(item.code)"
              >
                {{ item.name }}
              </p>
            </div>
          </div>
          <div class="blog">
            <BlogItem
              :data="item"
              v-for="(item, idx) in blogList"
              :key="idx"
            ></BlogItem>
          </div>
        </div> </el-col
    ></el-row>
  </div>
</template>

<script>
import BlogItem from "./blog-item.vue";
import { getQuery } from "@/utils";
export default {
  components: { BlogItem },
  data() {
    return {
      blogClass: [],
      blogList: [],
    };
  },
  methods: {
    getClass() {
      this.$store.dispatch("getClass").then((res) => {
        if (res) {
          this.blogClass = [{ code: 0, name: "全部" }, ...res];
        }
      });
    },
    clickClass(type) {
      const params = type === 0 ? "" : { type };
      this.$store.dispatch("getBlog", params).then((res) => {
        if (res) {
          this.blogList = res;
        }
      });
    },
  },
  computed: {},
  created() {
    const tag = getQuery(location.search.slice("1")).tag;
    this.getClass();
    this.clickClass(tag);
  },
};
</script>

<style lang="scss" scoped>
.tags {
  // background: #fff;
  .container {
    padding: 15px;
    .nav {
      text-align: center;
      background: rgba(0, 0, 0, 0.6);
      padding: 20px;
      & > div {
        display: inline-block;
        margin: auto;
        .nav-item {
          position: relative;
          text-align: center;
          font-size: 14px;
          cursor: pointer;
          padding: 10px 30px;
          float: left;
          color: #fff;
          &:hover {
            color: #04ac71;
          }
          &::after {
            position: absolute;
            right: 0;
            content: "/";
            color: #999;
          }
        }
      }
    }
    .blog {
      display: flex;
      flex-wrap: wrap;
      margin-top: 50px;
    }
  }
}
</style>
