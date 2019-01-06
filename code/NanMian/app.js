const AV = require('./libs/av-weapp-min.js');

AV.init({
  appId: 'sA65EmsRqEiBfE76Kz6vuMOl-gzGzoHsz',
  appKey: 'W8uh2qjOijbRTPuM8zuk9Bur',
});

App({
  onLaunch: function () {
    //获取用户登录信息
    AV.User.loginWithWeapp().then(user => {
      this.globalData.userInfo = user.toJSON();
      console.log(user.toJSON())
    }).catch(console.error);
  },
  globalData: {
    userInfo: null
  }
})