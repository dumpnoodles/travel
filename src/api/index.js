import { get } from './helpers'

const getIndexData = get('api/indexData')
const getCityData = get('api/cityData')
const getDetailData = get('api/detailData')

export {
  getIndexData,
  getCityData,
  getDetailData
}
