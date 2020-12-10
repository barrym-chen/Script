/*
[rewrite_local]
^^http:\/\/c\.pc\.qq\.com\/middlem\.html url script-request-header https://raw.githubusercontent.com/barrym-chen/Script/master/qqopener/qqopener.js
**********************
Surge 4.2.0+ 脚本配置:
**********************
[Script]
qqopener.js = type=http-request,pattern=^http:\/\/c\.pc\.qq\.com\/middlem\.html,script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/qqopener/qqopener.js
by @barry
原作者@江湖中人,修改而来。
*/
var str = ($request.url);
function test(){
stre=str.split("=")
res=stre[1]
s=res.split("&")
st=s[0]
reurl=decodeURIComponent(st)
}
//console.log(reurl)

const $ = new cmp()

if(str.indexOf("alipay") != -1){
  $.notify(``,"", "🔗点击支付宝链接", str)
}else{
test()
  $.notify(``,"", "🔗点击打开链接", reurl)
}
$done();

function cmp() {
    _isQuanX = typeof $task != "undefined"
    _isLoon = typeof $loon != "undefined"
    _isSurge = typeof $httpClient != "undefined" && !_isLoon
    this.notify = (title, subtitle, message, url) => {
        if (_isLoon) $notification.post(title, subtitle, message, url)
        if (_isQuanX) $notify(title, subtitle, message, { "open-url": url })
        if (_isSurge) $notification.post(title, subtitle, message, { url: url })
    }
}
