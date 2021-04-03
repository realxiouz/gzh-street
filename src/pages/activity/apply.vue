<template>
  <div>
    <div class="bg-blue" style="height:570rpx"></div>

    <div class="msg-wrap bg-white radius shadow padding-lr-sm">
      <form>
        <view class="cu-form-group">
          <view class="title">姓名</view>
          <input class="text-right" placeholder="输入您的姓名" name="input" v-model="name" />
        </view>
        <view class="cu-form-group">
          <view class="title">年龄</view>
          <input class="text-right" placeholder="输入您的年龄" name="input" v-model="age" />
        </view>
        <view class="cu-form-group">
          <view class="title">性别</view>
          <picker @change="sexChange" :value="sexInx" :range="sexs">
            <view class="picker">
              {{sexInx>-1?sexs[sexInx]:'选择您的性别'}}
            </view>
          </picker>
        </view>
        <view class="cu-form-group">
          <view class="title">联系方式</view>
          <input class="text-right" :maxlength="11" type="number" placeholder="输入手机号码" name="input" v-model="name" />
        </view>
        <view class="cu-form-group cu-bar bg-white">
          <view class="action" style="margin-left:0;">
            图片上传
          </view>
          <view class="action">
            {{imgList.length}}/4
          </view>
        </view>
        <view class="">
          <view class="grid col-4 grid-square flex-sub">
            <view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="viewImage" :data-url="imgList[index]">
            <image :src="imgList[index]" mode="aspectFill"></image>
              <view class="cu-tag bg-red" @tap.stop="delImage" :data-index="index">
                <text class='cuIcon-close'></text>
              </view>
            </view>
            <view class="solids" @tap="chooseImage" v-if="imgList.length<4">
              <text class='cuIcon-cameraadd'></text>
            </view>
          </view>
        </view>
      </form>

      <div class="cu-btn bg-blue block radius">确定报名</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      sex: '',
      imgList: [],
      sexs: ['男', '女'],
      sexInx: -1,
    }
  },
  methods: {
    sexChange(e) {
      this.sexInx = e.detail.value
    },
    chooseImage() {
      uni.chooseImage({
        count: 4, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: (res) => {
          if (this.imgList.length != 0) {
            this.imgList = this.imgList.concat(res.tempFilePaths)
          } else {
            this.imgList = res.tempFilePaths
          }
        }
      });
    },
    delImage(e) {
      this.$showModal({
        content: `确定要删除这张照片么?`,
        successCb: _ => {
          this.imgList.splice(e.currentTarget.dataset.index, 1)
        }
      })
    },
    viewImage(e) {
      uni.previewImage({
        urls: this.imgList,
        current: e.currentTarget.dataset.url
      });
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