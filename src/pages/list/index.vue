<template>
  <div>
    <div class="bg-blue" style="height:570rpx;position:fixed;top:0;left:0;right:0;z-index:-1;"></div>

    <div class="topic-wrap">
      <div class="bg-white radius margin-bottom-lg shadow padding-lr" v-for="(i,inx) in list" :key="inx" @click="$go(`/pages/detail/index?id=${i.id}`)">
        <div class="text-cut text-bold" style="line-height:70rpx">{{i.title}}</div>
        <div style="height:285rpx">
          <img style="width:100%;height:100%;" class="loading" :src="i.image" alt="">
        </div>
        <div class="flex justify-between align-center" style="height:50rpx;">
          <div>
            <span class="cuIcon-time margin-right-xs"></span>{{i.createtime|time}}
          </div>
          <div>
            <span class="cuIcon-attention margin-right-xs"></span>{{i.views}}
          </div>
        </div>
      </div>
    </div>
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
.topic-wrap{
  margin: 200rpx auto 0;
  height: 1000rpx;
  width: 690rpx;
}
</style>