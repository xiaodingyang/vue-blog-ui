import api from "@/request/api";
export default {
  install(Vue, options) {
    Vue.prototype.$api = api; // 将api挂载到全局
    // 关于菜单配色
    Vue.prototype.$menuBgColor = "rgb(13, 20, 31)";
    Vue.prototype.$menuTextColor = "#999";
    Vue.prototype.$menuActiveColor = "#30B08F";
    Vue.prototype.$menuActiveTextColor = "#fff";
  },
};
