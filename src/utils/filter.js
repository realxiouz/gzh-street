import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('time', function(val, fmt="YYYY-MM-DD HH:mm") {
  return dayjs(val ? val * 1000 : new Date()).format(fmt)
})