<template>
  <div>
    <div class="bg-blue" style="height:570rpx;position:fixed;top:0;left:0;right:0;z-index:-1;" v-if="list.length">
      <img style="width:100%;height:100%;" :src="`${list[0].channel.image}`" alt="">
    </div>

    <div style="position:sticky;top:0;padding:88rpx 30rpx 58rpx;">
      <div style="height:114rpx;background:#fff;" class="flex shadow radius">
        <div class="flex-sub align-center flex-direction flex" v-for="(i,inx) in tab" :key="inx" @click="onToggle(inx)">
          <img :src="i.image" alt="" style="width:80rpx;height:80rpx;">
          <div class="text-sm text-bold" :class="inx==curInx?'text-black':'text-grey'">{{i.name}}</div>
          <div v-if="inx==curInx" style="width:40rpx;height:4rpx;background:#F6775A"></div>
        </div>
      </div>
    </div>
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
  async onLoad(opt) {
    let {data} = await this.$get(`/api/v1/channel/list?channel=${opt.p}`)
    this.tab = data.data
    this.opt = opt
    // this.curInx = opt.i || 0
    this.getData()
  },
  data() {
    return {
      list: [],
      isLoaded: true,
      isLoading: false,
      isEnd: false,
      page: 1,

      tab: [],
      curInx: 0,
    }
  },
  methods: {
    getData(reset = false) {
      if (reset) {
        this.page = 1
        this.list = []
        this.isEnd = false
      }
      let d = {
        channel: this.tab[this.curInx].id,
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
          if (this.list.length) {
            this.$setTitle(this.list[0].channel.name)
          }
        })
        .finally(_ => {
          this.$hideLoading()
          this.isLoading = false
        })
    },
    onToggle(inx) {
      if (this.curInx != inx) {
        this.curInx = inx
        this.getData(true)
      }
    },
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
  margin: 0 auto 0;
  width: 690rpx;
}
</style>