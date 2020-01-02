<template>
  <div id="main">
    <div 
      class="box" 
      v-for="(item,index) of imgLinkList"
      :key="index"
    >
      <div class="pic">
        <img :src="require('@assets/JavaScript/images/'+index+'.jpg') " alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'JavaScript',
  data () {
    return {
      sum: 30
    }
  },
  computed: {
    imgLinkList () {
      let sum = this.sum;
      let arr  = []
      for (let index = 0; index < sum; index++) {
        arr.push(index)
      }
      return arr
    }
  },
  mounted () {
    window.onload =  () => {
      this.waterfall('main','box');
    } 
    this.$nextTick(() => {
      this.waterfall('main','box')
    })
  },
  methods: {
    waterfall (parent,box) {
      // 将main下的所有class为box的元素取出来
      let oParent = document.getElementById(parent);
      let oBoxs = this.getByClass(oParent,box)
      // 计算整个页面显示的列数（页面宽/box的宽）
     let oBoxw = oBoxs[0].offsetWidth;
     let cols =  Math.floor(document.documentElement.clientWidth/oBoxw)
    //  设置main的宽度
    oParent.style.cssText = 'width:'+ oBoxw*cols+'px;margin:0 auto';
    // 存放每一列高度的数组
    let hArr = [];
    let minH = '';
    let index =''
    for (var x = 0;x<oBoxs.length;x++) {
      if(x<cols) {
        hArr.push(oBoxs[x].offsetHeight)
        console.log(oBoxs[x]);
      } 
      else {
        minH = Math.min.apply(null,hArr)
        index = this.getMinhIndex(hArr,minH);
        oBoxs[x].style.position = 'absolute';
        oBoxs[x].style.top = minH + 'px';
        oBoxs[x].style.left = oBoxw*index + 'px';
        // oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
        hArr[index]+=oBoxs[index].offsetHeight;
      }
    }
    console.log(hArr);
    },
    // 根据class获取元素
    getByClass (parent,clsName) {
      let boxArr = new Array(), /* 用来存储获取到所有class为box的元素 */
      oElements = parent.getElementsByTagName('*');
      console.log(oElements);
      for (var i = 0;i < oElements.length; i ++) {
        if(oElements[i].className == clsName) {
          boxArr.push(oElements[i]);
        }
      }
      return boxArr;
    },
    getMinhIndex (arr,val) {
      for(let i in arr) {
        if(arr[i] === val) {
          return i
        }
      }
    }
  }
}
</script>
<style lang="less">
@import './index';
</style>