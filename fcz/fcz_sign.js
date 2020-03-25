const cookieName ='飞常准签到'
const cookieKey = 'chen_cookie_fcz'
const chen = init()
let cookieVal = chen.getdata(cookieKey)
sign()
function sign() {
    let url = {url: 'https://activity.m.duiba.com.cn/signactivity/doSign?id=352&_=1583166972585',
    headers: { Cookie:cookieVal}}
    url.headers['Connection'] = `keep-alive`
    url.headers['Content-Type'] = `application/x-www-form-urlencoded;charset=UTF-8`
    url.headers['Accept'] = `*/*`
    url.headers['Host'] = `activity.m.duiba.com.cn`
    url.headers['User-Agent'] = `Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 application=JDJR-App&deviceld=D6B42097-7660-464C-AE01-E5A3CFB2F788&clientType=ios`
    url.headers['Accept-Language'] = `zn-ch`
    url.headers['Accept-Encoding'] = `gzip, deflate, br`
    url.headers['Referer'] = `https://activity.m.duiba.com.cn/signactivity/index?id=352&from=login&spm=11245.1.1.1`
   // url.headers['Origin'] =  `https://promotion.elong.com`
    chen.get(url, (error, response, data) => {
      const result = JSON.parse(data)
      chen.log(`${data}`)
      const title = `${cookieName}`
      let subTitle = ``
      let detail = ``
    
      if (result.signInfoVO.todaySigned='true') {
        subTitle = `签到结果: 成功`
        detail = `获得：${result.signInfoVO.credits}积分,连签：${result.signInfoVO.continueDay}/7天`
       } else{
        subTitle = `签到结果: 失败`
      }
      chen.msg(title, subTitle, detail)
      chen.log()
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
  
