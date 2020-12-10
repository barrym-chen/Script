var str = ($request.url);
str=str.split("=")
res=str[1]
s=res.split("&")
st=s[0]
reurl=decodeURIComponent(st)
console.log(reurl)

const $ = new cmp()
    $.notify(``,"", "🔗点击打开链接", reurl)
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
