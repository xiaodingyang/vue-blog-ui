<template>
  <div class="index-page">
    <BaseNavBar ref="menu" id="menu"></BaseNavBar>
    <div
      class="bg"
      :style="`background:url(${bg}) no-repeat center/cover`"
    ></div>
    <vue-particles
      color="#dedede"
      :particlesNumber="40"
      :linesDistance="120"
      style="height:100%;width:100%;position:absolute;left:0;top:0;z-index:0;"
    ></vue-particles>
    <div class="main">
      <el-scrollbar style="height:100%;height:100%;">
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import BaseNavBar from "./nav-bar";
import Footer from "./footer";
export default {
  props: [],
  components: { BaseNavBar, Footer },
  data() {
    return {};
  },
  methods: {
    menuIsOpen() {
      return this.$refs.menu.menuIsOpen();
    },
    isOpen() {
      return this.$refs.menu.isOpen();
    },
  },
  computed: {
    bg() {
      const bg = this.$store.getters.imgList.filter(
        (item) => item.imgKey === "appHomeBg"
      );
      if (bg) return bg[0] && bg[0].imgList[0] && bg[0].imgList[0].url;
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.index-page {
  background-color: rgba(0, 0, 0, 1);
  .bg {
    position: fixed;
    left: -5px;
    top: -5px;
    z-index: 0;
    width: 101vw;
    height: 101vh;
    -webkit-filter: blur(3px);
    filter: (5px);
  }
  .container {
    padding: 15px;
    .base-page {
      padding: 15px;
      background: #fff;
    }
  }
  .main {
    width: 100vw;
    height: 100vh;
    /deep/.el-scrollbar__wrap {
      overflow-x: hidden; /*去除x轴滚动条*/
    }
    /deep/.el-scrollbar__bar.is-horizontal {
      display: none;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
