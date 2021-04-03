<template>
  <div>
    <swiper class="card-swiper bg-white margin-bottom-xs" :class="true?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="inxChange" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in banner" :key="index" :class="curInx==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>

    <div class="bg-white flex justify-around margin-bottom-xs" style="height:140rpx;">
      <div class="flex-sub flex flex-direction align-center text-xs justify-center" v-for="(i,inx) in icons" :key="inx" @click="onIconClick(i)">
        <div :class="i.cls" style="width:66rpx;height:66rpx;"></div>
        <div class="margin-top-xs">{{i.title}}</div>
      </div>
    </div>

    <div class="bg-white margin-bottom-xs padding-sm flex align-center">
      <div class="cuIcon-commentfill text-red margin-right-xs font-lg"></div>
      <div class="text margin-right text-bold">公告:</div>
      <div class="text-cut flex-sub text-sm">春眠不觉晓，处处闻啼鸟；夜来风雨声，花落知多少。</div>
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
      <div class="padding-tb-sm flex solid-bottom" v-for="i in 3" :key="i">
        <img style="width:185rpx;height:126rpx;" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" alt="">
        <div class="flex-sub margin-left flex flex-direction justify-around">
          <div class="text-gray">空山不见人，但闻人语响</div>
          <div class="flex justify-between">
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
      <div class="padding-bottom-sm margin-right-sm" v-for="i in 3" :key="i">
        <img style="width:333rpx;height:166rpx;" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" alt="">
        <div class="text-cut">愿君多采撷，此物最相思</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curInx: 0,
      banner: [
        {
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
        {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				},
        {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}
      ],
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
    }
  }
}
</script>

<style>

</style>