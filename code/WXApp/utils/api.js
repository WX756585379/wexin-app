const devhost = 'http://localhost:8081'
const prehost = 'www.xxx.com'

const isDev = true

function getHost() {
  return isDev ? devhost : prehost
}

function getRequestOpenIdUrl() {
  return getHost() + '/weixin/exchangeOpenId'
}

module.exports = {
  getRequestOpenIdUrl: getRequestOpenIdUrl
}