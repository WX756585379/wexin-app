const api = require('./api.js')

function requestOpenId(code, callback) {
  wx.request({
    url: api.getRequestOpenIdUrl(),
    method: 'POST',
    data: {
      code: code
    },
    header: {
      "Content-Type": "application/json"
    },
    success: res => {
      callback(res)
    },
    fail: res => {
      callback(res)
    }
  })
}

module.exports = {
  requestOpenId: requestOpenId
}