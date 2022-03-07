<template>
  <img
    src="@/assets/img/customer-service.png"
    class="ql-customer"
    :class="{ slient: slient, move: move }"
    ref="cust"
    @touchstart.stop="start"
    @touchmove.stop="moving"
    @click="openService"
  />
</template>

<script>
export default {
  name: "qlCustomerService",
  components: {},
  data() {
    return {
      dx: 0,
      dy: 0,
      timeOut: null, // 定时器，拖拽防抖
      slient: false, // 组件是否静止标识，开启透明功能，置为true
      move: false, // 移动判定
      times: 0 // 点击次数判定
    };
  },
  computed: {
    windowWidth() {
      return document.body.clientWidth;
    },
    windowHeight() {
      return document.body.clientHeight;
    }
  },
  mounted() {
    if (localStorage.getItem("custPosition")) {
      // 获取记录中的位置，避免切换页面重置位置
      let pos = JSON.parse(localStorage.getItem("custPosition"));
      this.$refs.cust.style.left = pos.x;
      this.$refs.cust.style.top = pos.y;
    } else {
      localStorage.setItem(
        "custPosition",
        JSON.stringify({
          x: document.body.clientWidth - 38 + "px",
          y: document.body.clientHeight * 0.72 + "px"
        })
      );
      this.$refs.cust.style.left = document.body.clientWidth - 38 + "px";
      this.$refs.cust.style.top = document.body.clientHeight * 0.72 + "px";
    }
  },
  methods: {
    /**
     * 2021.10 曾泽华
     * 全朗e家客服小组件实现效果说明：
     * 1.默认静止状态（move = false），初始位置在屏幕右侧偏下，小半部分隐藏于屏幕边缘；
     * 2.点击操作：
     *   第一次点击图标，转换为运动状态（move = true），点击次数+1（times = 1），图标离开屏幕边缘，悬浮；
     *   第二次点击图标，点击次数+1（times = 2），并打开客服页面；
     * 3.拖动操作：
     *   拖动图标，转换为运动状态（move = true），times直接设置为2；
     *   拖动时保证图标一直保持在页面范围内，实现逻辑：计算边界距离>=0；
     *   拖动结束后2秒内点击图标，打开客服页面；
     * 4.不对图标做任何操作，2秒后，图标自动移动到屏幕边缘，回归静止状态，实现逻辑：定时器防抖，transition实现动画效果；
     * 5.只有运动状态下点击图标才会进入客服页面，实现逻辑：move && times >=2;
     */
    start(event) {
      this.move = false;
      var touch = null;
      // 获取触点
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }

      // 计算触点位置与组件左上角的差值
      this.dx = touch.clientX - event.target.offsetLeft;
      this.dy = touch.clientY - event.target.offsetTop;

      // 拖动组件时，组件透明度为1
      // this.slient = false
    },
    moving(event) {
      var touch = null;
      // 获取触点
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }

      // 移动组件
      if (touch.clientX - this.dx < 0) {
        // 左右边界限定
        this.$refs.cust.style.left = "0px";
      } else if (touch.clientX - this.dx + 62 > this.windowWidth) {
        this.$refs.cust.style.left = this.windowWidth - 62 + "px";
      } else {
        this.$refs.cust.style.left = touch.clientX - this.dx + "px";
      }
      if (touch.clientY - this.dy < 0) {
        // 上下边界限定
        this.$refs.cust.style.top = "0px";
      } else if (touch.clientY - this.dy + 62 > this.windowHeight) {
        this.$refs.cust.style.top = this.windowHeight - 62 + "px";
      } else {
        this.$refs.cust.style.top = touch.clientY - this.dy + "px";
      }

      this.times = 2

      // 定时器防抖设置
      if (this.timeOut !== null) {
        window.clearTimeout(this.timeOut);
        this.timeOut = null;
      }
      this.timeOut = window.setTimeout(() => {
        // this.slient = true
        this.move = true;
        if (
          this.$refs.cust.style.left.split("px")[0] >
          document.body.clientWidth / 2
        ) {
          this.$refs.cust.style.left = document.body.clientWidth - 38 + "px";
        } else {
          this.$refs.cust.style.left = -24 + "px";
        }
        // 记录位置信息到本地
        localStorage.setItem(
          "custPosition",
          JSON.stringify({
            x: this.$refs.cust.style.left,
            y: this.$refs.cust.style.top
          })
        );
        this.times = 0
      }, 2 * 1000);
    },
    openService() {
      // 点击时完全显示图标
      this.move = true;
      this.times++
      if (
        this.$refs.cust.style.left.split("px")[0] >
        document.body.clientWidth - 62
      ) {
        this.$refs.cust.style.left = document.body.clientWidth - 62 + "px";
      } else if (this.$refs.cust.style.left.split("px")[0] < 0) {
        this.$refs.cust.style.left = "0px";
      }
      if (this.times >= 2) {
        window.location.href = "http://zmkf.gf21.com/s/62304d0qo";
        this.times = 0
      }
      this.timeOut = window.setTimeout(() => {
        // this.slient = true
        this.move = true;
        if (
          this.$refs.cust.style.left.split("px")[0] >
          document.body.clientWidth / 2
        ) {
          this.$refs.cust.style.left = document.body.clientWidth - 38 + "px";
        } else {
          this.$refs.cust.style.left = -24 + "px";
        }
        // 记录位置信息到本地
        localStorage.setItem(
          "custPosition",
          JSON.stringify({
            x: this.$refs.cust.style.left,
            y: this.$refs.cust.style.top
          })
        );
        this.times = 0
      }, 2 * 1000);
      // window.open('http://zmkf.gf21.com/s/62304d0qo'); // 打开新页面
    }
  }
};
</script>
<style lang="less" scoped>
@deep: ~">>>";
.ql-customer {
  // .border;
  position: fixed;
  z-index: 99999999;
  width: 62px;
  height: 62px;
  opacity: 1;
  transition: opacity 0.3s;
}
.move {
  transition: left 0.3s;
}
.slient {
  opacity: 0.4;
}
</style>
