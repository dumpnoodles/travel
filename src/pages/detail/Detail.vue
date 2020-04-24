<template>
<div>
  <detail-banner
    :bannerImg="bannerImg"
    :sightName="sightName"
    :gallaryImgs="gallaryImgs"
  ></detail-banner>
  <detail-header></detail-header>
  <div class="content">
    <detail-list :list="categoryList"></detail-list>
  </div>
</div>
</template>
<script>
import { getDetailData } from 'api'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  methods: {
    getDetailInfo () {
      getDetailData().then((detailData) => {
        const data = detailData.data
        this.bannerImg = data.bannerImg
        console.log(data.bannerImg)
        this.categoryList = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
