function setBaseUrl () {
  let baseURL
  if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://www.aldexam.com:9080/'
  } else if (process.env.NODE_ENV === 'production') {
    baseURL = 'http://www.aldexam.com:9080/'
  } else if (process.env.NODE_ENV === 'mock') {
    baseURL = location.protocol + location.host + '/api-proxy'
  }
  return baseURL
}
export let baseURL = setBaseUrl()
export default {
  propertyGroup: 'propertyGroup',
  findByPropertyGroupIdAndName: 'propertyId/search/findByPropertyGroupIdAndName',
  propertySearch: 'property/search/',
  property: 'property',
  propertyId: 'propertyId',
  import: baseURL + 'import'
}
