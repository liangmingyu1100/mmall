import { instance2 } from './request'
export function getCategoryData() {
  return instance2({
    url: '/category'
  })
}
export function getSubCategoryData(maitKey) {
  return instance2({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}