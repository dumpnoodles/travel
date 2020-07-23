<template>
  <div id="city">
    <city-header></city-header>
    <city-search :cities='cities'></city-search>
    <city-list
    :hotCities='this.hotCities'
    :cities='this.cities'
    :letter="this.letter"
    ></city-list>
    <city-alphabet
    :cities='this.cities'
    @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import { getCityData } from 'api'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      getCityData().then((indexData) => {
        const data = indexData.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      })
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style scoped>

</style>
