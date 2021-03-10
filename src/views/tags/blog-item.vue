<template>
  <div class="tag-item" @click="$router.push(`/blog/detail?id=${data.id}`)">
    <div class="container">
      <div class="img">
        <div
          class="bg"
          :style="
            `background:url(${data.src &&
              data.src[0] &&
              data.src[0].url})no-repeat center/cover`
          "
        ></div>
      </div>
      <el-tooltip
        class="item"
        effect="dark"
        :content="data.title"
        placement="bottom"
      >
        <div class="title">{{ data.title }}</div>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        :content="data.description"
        placement="bottom"
      >
        <div class="description">{{ data.description }}</div>
      </el-tooltip>
      <div class="footer">
        <div class="time">
          <span class="el-icon-time"></span>
          <span>{{ data.updateTime }}</span>
        </div>
        <p class="read">
          <router-link
            :to="{
              path: '/blog/detail',
              query: {
                id: data.id,
              },
            }"
            >阅读全文 &gt;</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tag-item {
  width: 290px;
  height: 350px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: #242f35;
  padding: 15px;
  margin-top: 20px;
  cursor: pointer;
  margin-right: 20px;
  .container {
    position: relative;
    height: 100%;
    .img {
      height: 150px;
      overflow: hidden;
      .bg {
        height: 150px;
        transition: 1s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .title {
      font-weight: bold;
      color: #242f35;
      font-size: 16px;
      padding: 20px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        color: #04ac71;
      }
    }
    .description {
      color: #aaa;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .footer {
      position: absolute;
      width: 100%;
      bottom: 0px;
      display: flex;
      justify-content: space-between;
      .time {
        font-size: 13px;
      }
      .read {
        a {
          font-size: 14px;
          color: #04ac71;
        }
      }
    }
  }
}
</style>
