<template>
  <!-- 所有的item都展示同一个图片，同一个文字,而且写死了。所以需要动态插槽 -->
  <!--  <img src="../../assets/img/tabbar/home.png" alt="">
    <div>首页</div> -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 红色样式写死了，要动态修改 -->
    <!-- <div :class="{active:isActive}"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
  
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#fd7e96'
      }
    },
    data(){
      return {
        // isActive: true,
      }
    },
    computed: {
      isActive() {
        // /home => item1(/home) = true
        // /home => item2(/categroy) = flase
        // /home => itme3(/cart) = flase
        // /home => item4(/profile) = flase
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive? {color:this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path).catch(err => err);
      }
    }   

  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
    font-weight: bold;
    color:#b0b0b0;
    cursor: pointer;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
    margin-top: 4px;
  }
  /* 动态修改样式 */
  /* .tab-bar-item{
    color: red;
  } */
</style>
