<template>
  <div id="home">
    <home-header :city='this.city'></home-header>
    <home-swiper :swiperList='this.swiperList'></home-swiper>
    <home-icons :iconList='this.iconList'></home-icons>
    <home-recommend :recommendList='this.recommendList'></home-recommend>
    <home-weekend :weekendList='this.weekendList'></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { getIndexData } from 'api'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      getIndexData().then((indexData) => {
        const data = indexData.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
        // console.log(indexData.data.swiperList)
      })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style>

</style>
