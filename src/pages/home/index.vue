<template>
  <div>
    <swiper class="card-swiper bg-white margin-bottom-xs" :class="true?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="inxChange" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(i,index) in banner" :key="index" :class="curInx==index?'cur':''">
				<view class="swiper-item">
					<image :src="i.image" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>

    <!-- <div class="bg-white flex justify-around margin-bottom-xs" style="height:140rpx;">
      <div class="flex-sub flex flex-direction align-center text-xs justify-center" v-for="(i,inx) in icons" :key="inx" @click="onIconClick(i)">
        <div :class="i.cls" style="width:66rpx;height:66rpx;"></div>
        <div class="margin-top-xs">{{i.title}}</div>
      </div>
    </div> -->
    <div class="cu-list grid col-4 bg-white margin-bottom-xs">
      <div class="cu-item align-center" v-for="i,inx in menu" :key="inx">
        <img style="width:120rpx;height:120rpx;" :src="i.value.image" alt="">
        <div class="text-cut text-sm">{{i.value.title}}</div>
      </div>
    </div>

    <div class="bg-white margin-bottom-xs padding-sm flex align-center">
      <div class="cuIcon-commentfill text-red margin-right-xs font-lg"></div>
      <div class="text margin-right text-bold">公告:</div>
      <swiper class="flex-sub" style="height:50rpx;line-height:50rpx;" :vertical="true" :autoplay="announcement.length>1" :duration="300" :circular="true">
        <swiper-item
          v-for="i,inx in announcement"
          :key="inx"
          class="text-cut text-sm"
        >{{i.title}}</swiper-item>
      </swiper>
    </div>

    <view class="cu-bar bg-white">
      <view class="action">
        <text class="cuIcon-titles text-yellow"></text>
        <text class="text-xl text-bold">热门专题</text>
      </view>
      <div class="flex-sub"></div>
      <div>更多</div>
      <div class="cuIcon-right" style="margin-right:30rpx;"></div>
    </view>
    <div class="padding-lr bg-white margin-bottom-xs">
      <div class="padding-tb-sm flex solid-bottom" v-for="i,inx in archivesList" :key="inx" @click="$go(`/pages/detail/index?id=${i.id}`)">
        <img style="width:185rpx;height:126rpx;" :src="i.image" alt="">
        <div class="flex-sub margin-left flex flex-direction justify-around">
          <div class="text-gray">{{i.title}}</div>
          <div class="flex justify-between">
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

    <view class="cu-bar bg-white">
      <view class="action">
        <text class="cuIcon-titles text-red"></text>
        <text class="text-xl text-bold">街道活动</text>
      </view>
      <div class="flex-sub"></div>
      <div>更多</div>
      <div class="cuIcon-right" style="margin-right:30rpx;"></div>
    </view>
    <div class="padding-left bg-white margin-bottom-xs flex flex-wrap">
      <div class="padding-bottom-sm margin-right-sm" style="width:333rpx;" v-for="(i,inx) in activity" :key="inx">
        <img style="width:333rpx;height:166rpx;" :src="i.image" alt="">
        <div class="text-cut">{{i.project_name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  onLoad(opt) {
    this.getData()

    // this.$get(`api/v1/archives/index`, {
    //   page: 1,
    //   channel: 8
    // })
  },
  data() {
    return {
      curInx: 0,
      banner: [],
      archivesList: [],
      activity: [],
      menu: [],
      announcement: [],
      icons: [
        {
          title: '基层党建',
          cls: 'bg-orange'
        },
        {
          title: '社区通告',
          cls: 'bg-olive',
          path: `/pages/message/index`
        },
        {
          title: '热门专题',
          cls: 'bg-yellow',
          path: `/pages/topic/index`
        },
        {
          title: '街道活动',
          cls: 'bg-blue',
          path: `/pages/activity/index`
        },
        {
          title: '街道介绍',
          cls: 'bg-cyan',
          path: `/pages/street/index`
        },
        // {
        //   title: '社区详情',
        //   cls: 'bg-grey'
        // },
        {
          title: '留言板',
          cls: 'bg-purple',
          path: `/pages/message/apply`
        },
      ]
    }
  },
  methods: {
    inxChange(e) {
      this.curInx = e.detail.current
    },
    onIconClick(i) {
      if(i.path) {
        this.$go(i.path)
      }
    },
    getData() {
      this.$showLoading()
      this.$get(`api/v1/index/index`)
        .then(r => {
          let { banner, archivesList, activity, announcement, menu } = r.data
          this.banner = banner
          this.archivesList = archivesList
          this.activity = activity
          this.announcement = [...announcement, ...announcement]
          this.menu = menu.home_menus
        })
        .finally(_ => {
          this.$hideLoading()
        })
    }
  }
}
</script>

<style>

</style>