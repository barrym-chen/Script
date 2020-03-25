# **自用机场签到**<br>



该脚本理论上该脚本兼QuanSurge，使用一份即可<br>

避免产生不必要的问题，故不放邀请链接（机场需要邀请码）


## 配置(Quanx)<br>

```

[MIMT]

cn.exflux.io

[rewrie_local]

^https:\/\/cn\.exflux\.io\/user\/checkin url script-request-header cookie_jc.js

[task_local]

0 0 * * * jc.js

```

## 获取cookie说明<br>

点击[登录](https://cn.exflux.io)<br>


1、机场个人页面，然后点击签到即可获取cookie<br>

2、为什么签到无结果或者无通知？<br>

* 可能是cookie过期了<br>

* 也可能没有账户异常被暂时禁用<br>


3、解决办法：重新获取cookie或者联系场长（非常宽松）


## 感谢

[Nobyda](https://github.com/NobyDa/Scrip)<br>

[Chavy](https://github.com/chavyleung/script)
