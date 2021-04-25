<template>
  <div>
    <div class="bg-olive" style="height:570rpx"></div>

    <scroll-view class="msg-wrap bg-white radius shadow padding-lr-sm" style="box-sizing:border-box;" scroll-y>
      <div v-for="(i, inx) in list" :key="inx" class="bg-white padding-tb-sm flex align-center" :class="inx==list.length-1?'':'solid-bottom'" @click="$go(`/pages/detail/index?id=${i.id}`)">
        <div class="cuIcon-commentfill text-red margin-right-xs" style="font-size:20px;"></div>
        <div class="text margin-right text-bold">公告:</div>
        <div class="text-cut flex-sub text-sm">{{i.title}}</div>
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
  onLoad(opt) {
    this.opt = opt
    this.getData()
  },
  data() {
    return {
      list: [],
      isLoaded: true,
      isLoading: false,
      isEnd: false,
      page: 1,
    }
  },
  methods: {
    getData() {
      let d = {
        channel: this.opt.c,
        page: this.page
      }
      this.$showLoading()
      this.isLoading = true
      this.$get(`api/v1/archives/index`, d)
        .then(r => {
          if (!r.data.length) {
            this.isEnd = true
          }
          this.list.push(...r.data)
        })
        .finally(_ => {
          this.$hideLoading()
          this.isLoading = false
        })
    }
  },
  onReachBottom() {
    if (this.isLoading || this.isEnd) {
      return
    }
    this.page++
    this.getData()
  }
}
</script>

<style>
.msg-wrap{
  margin: -490rpx auto 0;
  
  width: 690rpx;
}
</style>