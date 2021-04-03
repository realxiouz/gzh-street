<template>
  <div>
    <div class="bg-olive" style="height:570rpx"></div>

    <scroll-view class="msg-wrap bg-white radius shadow padding-lr-sm" scroll-y>
      <div v-for="(i, inx) in list" :key="inx" class="bg-white padding-tb-sm flex align-center" :class="inx==list.length-1?'':'solid-bottom'">
        <div class="cuIcon-commentfill text-red margin-right-xs" style="font-size:20px;"></div>
        <div class="text margin-right text-bold">公告:</div>
        <div class="text-cut flex-sub text-sm">春眠不觉晓，处处闻啼鸟；夜来风雨声，花落知多少。</div>
        <div class="cuIcon-right"></div>
      </div>
      <div v-if="isLoaded&&!list.length" style="height:100%" class="flex flex-direction align-center justify-center">
        <div class="cuIcon-news text-grey" style="font-size: 60px;"></div>
        <div>这里空空如也</div>
      </div>
    </scroll-view>
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
.msg-wrap{
  margin: -490rpx auto 0;
  height: 1000rpx;
  width: 690rpx;
}
</style>