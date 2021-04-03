<template>
  <div>
    <div class="bg-blue" style="height:570rpx;position:fixed;top:0;left:0;right:0;z-index:-1;"></div>

    <div class="topic-wrap">
      <div class="bg-white radius margin-bottom-lg shadow padding-lr" v-for="(i,inx) in list" :key="inx" @click="$go(`/pages/activity/apply`)">
        <div class="text-cut text-bold" style="line-height:70rpx">明月出天山，苍茫云海间;长风几万里，吹度玉门关....</div>
        <div style="height:285rpx">
          <img style="width:100%;height:100%;" class="loading" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" alt="">
        </div>
        <div class="flex justify-between align-center" style="height:50rpx;">
          <div>
            <span class="cuIcon-time margin-right-xs"></span>2021-4-3
          </div>
          <div>
            <span class="cuIcon-attention margin-right-xs"></span> 11
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1,,1,1,],
      isLoaded: true,
      isLoading: false,
      isEnd: false,
    }
  }
}
</script>

<style>
.topic-wrap{
  margin: 200rpx auto 0;
  height: 1000rpx;
  width: 690rpx;
}
</style>