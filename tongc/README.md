# **同程艺龙微信小程序签到**<br>
该脚本理论上该脚本兼QuanSurge，使用一份即可<br>


## 配置<br>
#### quanx
```
[MIMT]
wx.17u.cn


[rewrie_local]
^https:\/\/wx\.17u\.cn\/wcsign\/sign\/GetSignInfo url script-request-body https://raw.githubusercontent.com/barrym-chen/Script/master/tongc/tongc_cookie.js


[task_local]
0 0 * * * https://raw.githubusercontent.com/barrym-chen/Script/master/tongc/tongc_sign.js

```
#### surge
```
[Script]
tongccookie.js=type=http-request,require-body=1,pattern=^https:\/\/wx\.17u\.cn\/wcsign\/sign\/GetSignInfo,script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/tongc/tongc_cookie.js
tongcsign.js=type=cron,cronexp=10 0 * * *,script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/tongc/tongc_sign.js

```

#### Loon
```
[Script]
http-request ^https:\/\/wx\.17u\.cn\/wcsign\/sign\/GetSignInfo script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/tongc/tongc_cookie.js,requires-body=true
cron "10 0 * * *" script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/tongc/tongc_sign.js

```
## 获取cookie说明<br>


1、`同需要实名认证，这是是签到的基础`<br>
2、在`同程艺龙`微信小程序主页，`我的`->连续签到`即可获取cookie成功<br>
3、为什么会不能成功获取到cookie？<br>
* 一方面可能是没有签到过<br>
* 可能没有实名认证<br>


## 感谢
[Nobyda](https://github.com/NobyDa/Scrip)<br>
[Chavy](https://github.com/chavyleung/script)
