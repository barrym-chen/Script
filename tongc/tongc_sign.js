const chen = init()
const cookieName = '同程小程序签到'
const bodyKey = 'chen_body_tc'
const headerKey = 'chen_header_tc'
const signinfo = {}
let bodyVal = chen.getdata(bodyKey)
let headerVal = chen.getdata(headerKey)
signapp()

function signapp() {
    const url = {url: 'https://wx.17u.cn/wcsign/sign/SaveSignInfo',headers: JSON.parse(headerVal),body: bodyVal}
    chen.post(url, (error, response, data) => {
      chen.log(`${cookieName}, data: ${data}`)
          signinfo.signapp = JSON.parse(data)
          // if (signapp.rspCode == 0 &&signapp.message =='签到成功') {
          //   subTitle = `签到结果: 成功`
          //   detail = `总签到计：${signapp.data.totalSignDays}天,本周签到:${signapp.data.signDay}/7天`
          // } else if (signapp.rspCode == 3001) {
          //   subTitle = `签到结果: 重复`
          //   detail = `说明: ${signapp.message}`
          // } else {
          //   subTitle = `签到结果: 失败`
          // }
          // chen.msg(cookieName, subTitle, detail)
          // chen.done()
        })
      }
  setTimeout(getinfo(),500)
  function getinfo() {
    const url = {url: 'https://wx.17u.cn/wcsign/sign/GetSignInfo',headers: JSON.parse(headerVal),body: bodyVal}
    chen.post(url, (error, response, data) => {
        signinfo.getinfo = JSON.parse(data)
      })
  }
  setTimeout(show(),600)
function show() {
        let subTitle = ''
        let detail = ''

      //result
        if (signinfo.signapp.rspCode == 0 &&signinfo.signapp.message =='签到成功') {
          subTitle = `签到结果: 成功`
          detail = `总签到计：${signinfo.signapp.data.totalSignDays}天,本周签到:${signinfo.signapp.data.signDay}/7天`
        } else if (signinfo.signapp.rspCode == 3001) {
          subTitle = `签到结果: 重复`
          detail = `说明: ${signinfo.signapp.message}`
        } else {
          subTitle = `签到结果: 失败`
        }
          //subTitle += `同程小程序签到结果`
          if(signinfo.getinfo.rspCode == 0 &&signinfo.getinfo.message =='获取成功'){
            subTitle += `成功`
            detail += `总里程:${signinfo.getinfo.data.totalMileage},连续签到：${signinfo.getinfo.data.continuedSignDays}天,明天可获得:${signinfo.getinfo.data.tomorrowMileage}里程`
          } else if(signinfo.getinfo.reqCode == 8000) {
            subTitle += `失败`
            detail += `${signinfo.getinfo.message}`
          }
          chen.msg(cookieName, subTitle, detail)
          chen.done()
        }


function init() {
    isSurge = () => {
      return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
      return undefined === this.$task ? false : true
    }
    getdata = (key) => {
      if (isSurge()) return $persistentStore.read(key)
      if (isQuanX()) return $prefs.valueForKey(key)
    }
    setdata = (key, val) => {
      if (isSurge()) return $persistentStore.write(key, val)
      if (isQuanX()) return $prefs.setValueForKey(key, val)
    }
    msg = (title, subtitle, body) => {
      if (isSurge()) $notification.post(title, subtitle, body)
      if (isQuanX()) $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
      if (isSurge()) {
        $httpClient.get(url, cb)
      }
      if (isQuanX()) {
        url.method = 'GET'
        $task.fetch(url).then((resp) => cb(null, {}, resp.body))
      }
    }
    post = (url, cb) => {
      if (isSurge()) {
        $httpClient.post(url, cb)
      }
      if (isQuanX()) {
        url.method = 'POST'
        $task.fetch(url).then((resp) => cb(null, {}, resp.body))
      }
    }
    done = (value = {}) => {
      $done(value)
    }
    return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
  }
  chen.done()
