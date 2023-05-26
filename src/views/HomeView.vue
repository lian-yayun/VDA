<template>
  <div class="rw">
    <div class="title">
      <span class="title-1">全球航班总量看板</span>
      <img class="img-1" src="../assets/10a.svg" alt="" />
      <img class="img-1" src="../assets/10-2a.svg" alt="" />
      <img class="img-2" src="../assets/11a.svg" alt="" />
      <img class="img-2" src="../assets/11-2a.svg" alt="" />
      <div class="showTime">
        <div class="weather">
          <img
            class="icon-1"
            src="../assets/sun.png"
            alt=""
          />&nbsp;&nbsp;&nbsp;&nbsp;晴&nbsp;&nbsp;&nbsp;&nbsp; 17~28℃
          &nbsp;&nbsp;&nbsp;&nbsp;东南风3级
        </div>
        <div id="showTimeitem"></div>
      </div>
    </div>
    <div class="main">
      <div class="body-1">
        <div id="world"></div>
        <div class="fanpai">
          <div class="text">
            <img src="../assets/9a.svg" alt="" />
            <div class="text-1">当日世界航班数量</div>
          </div>
          <div class="count">
            <div class="item-4">
              <count-to
                :startVal="startVal"
                :endVal="endVal"
                :duration="duration"
              />
              <span class="item-1">,000 flights</span>
            </div>
          </div>
        </div>
        <div id="china"></div>
      </div>
      <div class="body-2">
        <div id="item-2"></div>
        <div id="item-3"></div>
      </div>
    </div>
    <div class="main-2"></div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      startVal: 0,
      endVal: 200,
      duration: 3000,
    };
  },
  components: {},
  mounted() {
    this.getTime();
    require("@/js/onfun");
  },
  methods: {
    getTime() {
      var t = null;
      t = setTimeout(time, 1000); //開始运行
      function time() {
        clearTimeout(t); //清除定时器
        var dt = new Date();
        var y = dt.getFullYear();
        var mt = dt.getMonth() + 1;
        var day = dt.getDate();
        var h = dt.getHours(); //获取时
        var m = dt.getMinutes(); //获取分
        var s = dt.getSeconds(); //获取秒
        document.querySelector("#showTimeitem").innerHTML =
          y + "-" + mt + "-" + day + " " + h + ":" + m + ":" + s + " ";
        t = setTimeout(time, 1000); //设定定时器，循环运行
      }
    },
  },
};
</script>
<style scoped lang="scss">
@font-face {
  font-family: electronicFont;
  src: url(../asset/font/DS-DIGIT.TTF);
}

.rw {
  .title {
    width: 100%;
    height: 0.9rem;
    background: transparent;

    text-align: left;
    position: relative;

    .title-1 {
      color: #dcdcdc;
      font-style: italic;
      font-weight: 600;
      text-shadow: 1px 1px #0075ff;
      font-family: "PingFang Medium";
      font-size: 28px;
      line-height: 48px;
      position: relative;

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        background-image: url(../assets/2b.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        transform: translate(0%, 50%);
      }
    }

    .img-1 {
      width: 60%;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .img-2 {
      width: 30%;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .showTime {
      position: absolute;
      top: 0;
      right: 0.375rem;
      display: flex;
      align-items: center;

      .weather {
        color: #e6f7ff;
        font-size: 14px;
        width: 4rem;
        height: 0.9375rem;
        line-height: 0.9375rem;
        display: flex;
        align-items: center;
        font-weight: 400;

        .icon-1 {
          width: 40px;
          height: 40px;
          filter: drop-shadow(0 0 #000);
        }
      }

      #showTimeitem {
        line-height: 0.9375rem;
        font-size: 14px;
        color: #e6f7ff;
        font-weight: 400;
        width: 3.125rem;
        text-align: center;
      }
    }
  }

  .main {
    width: calc(100% - 0.625rem);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .body-1 {
      width: 60%;
      position: relative;

      .fanpai {
        position: absolute;
        width: 3rem;
        height: 2.2rem;
        position: absolute;
        top: 13%;
        right: 0;
        z-index: 2;
        transform: translate(50%, -50%);

        .text {
          width: 3rem;
          height: 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;

          .text-1 {
            font-family: "PingFang Medium";
            font-size: 16px;
            height: 0.5rem;
            line-height: 0.5rem;
            color: #dcdcdc;
            width: 3rem;
            font-weight: 600;
            text-shadow: 1px 1px #0075ff;
          }
        }

        .count {
          width: 3rem;
          height: 2rem;
          background-image: url("../assets/8a.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          font-family: electronicFont;
          font-size: 52px;
          color: #ffffff;
          position: relative;

          .item-4 {
            position: absolute;
            top: 0;
            left: 0;
            width: 3.7rem;
            transform: translateX(-9%);

            .item-1 {
              font-family: electronicFont;
              font-size: 16px;
            }
          }
        }
      }

      #china {
        width: 5.6125rem;
        height: 4.7375rem;
        position: absolute;
        bottom: 0.35rem;
        right: 0;
        transform: translateX(28%);
      }
      #world {
        width: 100%;
        height: 8.2rem;
        position: relative;

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          content: "";
          width: 10px;
          height: 10px;
          border-top: 2px solid #02a6b5;
          border-left: 2px solid #02a6b5;
          z-index: 1;
        }

        &::after {
          position: absolute;
          top: 0;
          right: 0;
          content: "";
          width: 10px;
          height: 10px;
          border-top: 2px solid #02a6b5;
          border-right: 2px solid #02a6b5;
          z-index: 1;
        }
      }
    }

    .body-2 {
      width: 8rem;
      height: calc(100vh - 0.9rem);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      #item-2 {
        width: 100%;
        height: 3.7rem;
      }

      #item-3 {
        width: 7.1375rem;
        height: 3.3rem;
        margin-top: 10px;
        position: relative;
        background-image: url("../assets/5a.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;

        &::after {
          content: "";
          width: 7.1375rem;
          height: 3.3rem;
          background-image: url("../assets/7a.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 1;
        }
      }
    }
  }
}
</style>
