<template>
  <div
    v-if="isLoaded"
  >
    <div >
      <img :src="archivesInfo.image" mode="widthFix" style="width:100%;" alt="">
    </div>
    <div class="padding-lr">
      <div class="text-bold text-xl margin-tb">{{archivesInfo.title}}</div>
      <div v-html="archivesInfo.content"></div>
    </div>
    <div style="height:100rpx;"></div>
    <div class="b-bar flex align-center padding-lr-sm">
      <div class="cuIcon-attention"></div>
      <div class="margin-left-xs text-sm margin-right-xl">{{archivesInfo.views}}</div>
      <div class="cuIcon-like"></div>
      <div class="margin-left-xs text-sm margin-right-xl">{{archivesInfo.likes}}</div>
      <div class="flex-sub"></div>
      <div class="cu-tag bg-blue radius">{{channelInfo.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  onLoad(opt) {
    this.opt = opt
    this.getData()
    console.log('onLoad...')
    if (this.isLoaded) {
      this.$go(1, 'back')
    }
  },
  onShow() {
    console.log('onShow...')
    // if (this.isBack) {
    //   console.log('need back')
    //   this.$go(1,'back')
    // }
    if (this.isLoaded) {
      this.$go(1, 'back')
    }
  },
  data() {
    return {
      archivesInfo: {},
      isLoaded: false,
      channelInfo: {},
    }
  },
  methods: {
    getData() {
      this.$showLoading()
      let d = {
        id: this.opt.id
      }
      this.$get(`api/v1/archives/detail`, d)
        .then(r => {
          this.isLoaded = true
          let {channelInfo, archivesInfo} = r.data
          if (archivesInfo.outlink) {
            window.location.replace(archivesInfo.outlink)
          } else {
            this.channelInfo = channelInfo
            this.archivesInfo = archivesInfo
          }
        })
        .finally(_ => {
          this.$hideLoading()
        })
    }
  }
}
</script>

<style scoped>
.b-bar{
  height: 100rpx;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>