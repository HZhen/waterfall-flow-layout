<template>
  <el-container class="main"
    @click.native="handleSwitch"
    :style="{backgroundImage:'url('+require('@assets/images/bg' + imgIndex + '.jpg')+')'}"
  >
    <ul class="friend-link">
      <li v-for="(item,index) of linkList" :key="index">
        <router-link :to="item.path">
          <h3 class="title">{{item.label}}</h3>
        </router-link>
      </li>
    </ul>
  </el-container>
</template>
<script>
import './main.less'
export default {
  name: 'Main',
  data () {
    return {
      linkList: [
        {label:'CSS3', path: '/CSS3'},
        {label:'JavaScript', path: '/JavaScript'},
        {label:'jQuery', path: '/jQuery'}
      ],
      imgIndex: 1
    }
  },
  mounted () {
    this.setIndex();
  },
  methods: {
    setIndex () {
      let that = this;
      var interval = setInterval(function(){
        that.imgIndex = that.imgIndex + 1;
        if(that.imgIndex === 9) {
          clearInterval(interval);
          that.imgIndex = 0;
        }
        console.log(that.imgIndex)
        /* if(that.imgIndex === 9) {
          that.imgIndex = 1;
        } */
      }, 2000);
    },
    handleSwitch () {
      this.setIndex();
    }
  }
}
</script>