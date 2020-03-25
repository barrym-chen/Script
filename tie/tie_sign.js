const cookieName ='京东提鹅'
const cookieKey = 'chen_cookie_te'
const chen = init()
let cookieVal = chen.getdata(cookieKey)
sign()
function sign() {
    let url = {url: 'https://ms.jr.jd.com/gw/generic/uc/h5/m/toWithdraw?reqData=%7B%2522environment%2522:%2522jrApp%2522,%2522shareUuid%2522:%2522%2522%7D',
    headers: { Cookie:cookieVal}}
    url.headers['Connection'] = `keep-alive`
    url.headers['Content-Type'] = `application/x-www-form-urlencoded;charset=UTF-8`
    url.headers['Accept'] = `*/*`
    url.headers['Host'] = `ms.jr.jd.com`
    url.headers['User-Agent'] = `Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 application=JDJR-App&deviceld=D6B42097-7660-464C-AE01-E5A3CFB2F788&clientType=ios`
    url.headers['Accept-Language'] = `zn-ch`
    url.headers['Accept-Encoding'] = `gzip, deflate, br`
    url.headers['Referer'] = `https://active.jd.com/forever/btgoose/?channelLv=dc&babelChannel=syfw&showhead=no`
    url.headers['Origin'] = `https://active.jd.com`
    chen.get(url, (error, response, data) => {
      const result = JSON.parse(data)
      chen.log(`${data}`)
      const title = `${cookieName}`
      let subTitle = ``
      let detail = ``
    
      if (result.resultCode == 0) {
        subTitle = `签到结果: 成功`
        detail = `签到结果：下次收取需要等待${result.resultData.data.nextEggTime}秒,总计拥有${result.resultData.data.eggTotal}颗蛋`
      } else if(result.resultData.data.result='false'){
        subTitle = `签到结果: 未到收取时间`
        detail = `说明: 还需要等待${result.resultData.data.nextEggTime}秒`
      } else {
        subTitle = `签到结果: 未知`
        detail = `说明: ${result.resultData.msg}`
      }
      chen.msg(title, subTitle, detail)
      chen.log(`${result.totalBalanceAmount}`)
    })
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
  
