<template>
  <div class="index">
    <Rain :bg="rainBg"></Rain>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="main">
          <h1>Hello, I'm Silence.</h1>
          <h2>欢迎来到我的个人博客，我是一名前端工程师。</h2>
          <el-button plain @click="onClick">点击进入我的博客</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Rain from "@/components/rain";
export default {
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐props⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  props: [],
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐组件注册⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  components: { Rain },
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐data数据⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  data() {
    return {};
  },
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐method方法⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  methods: {
    onClick() {
      this.$router.push("/blog");
    },
  },
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐mounted方法⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  mounted() {},
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐created方法⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  created() {},
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐watch监听属性⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  watch: {},
  //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐computed计算属性⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐//
  computed: {
    rainBg() {
      const rainBg = this.$store.getters.imgList.filter(
        (item) => item.imgKey === "webHomeImg"
      );
      if (rainBg)
        return rainBg[0] && rainBg[0].imgList[0] && rainBg[0].imgList[0].url;
    },
  },
};
</script>

<style scoped lang="scss">
.index {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  .el-row {
    width: 100%;
  }
  .main {
    padding: 35px;
    margin: 0 15px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #000;
    transition: 0.5s;
    box-sizing: border-box;
    &:hover {
      transform: scale(1.1);
    }
    text-align: center;

    h1 {
      font-size: 50px;
      color: #fff;
      background-image: -webkit-linear-gradient(#fff, #0e5cad);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      font-size: 25px;
      color: #fff;
      padding: 40px 0;
    }
    /deep/.el-button {
      color: #fff;
      background: transparent;
    }
  }
  .el-col-xs-24 {
    .main {
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 20px;
      }
    }
  }
}
</style>
