<template>
  <el-container class="main">
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
        {label:'CSS3', path: '/waterfall_flow_layout/CSS3'},
        {label:'JavaScript', path: '/waterfall_flow_layout/JavaScript'},
        {label:'jQuery', path: '/waterfall_flow_layout/jQuery'}
      ]
    }
  },
}
</script>