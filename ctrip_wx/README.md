# **携程微信小程序签到**<br>



该脚本理论上该脚本兼QuanSurge，使用一份即可<br>

存在异常部分人可能无法正常获取到cookie，暂时无解



## 配置(Quanx)<br>

```

[MIMT]

*.ctrp.com

[rewrie_local]

https://socketio\.ctrip\.com/api url reject

^https:\/\/m\.ctrip\.com\/restapi\/soa2\/16575\/signin url script-request-body ct_cookie.js

[task_local]

0 0 * * * ct_sign.js

```

## 获取cookie说明<br>

1、登录携程微信小程序，然后点击，`签到`进行一次签到即可即可获取cookie<br>

2、为什么签到异常或者无法获取cookie？<br>

* 可能你没有进行实名认证<br>

* 也可能账户异常<br>

* 无法获取到cookie，因为签到的流量不走http，需要强制让它走


3、解决办法：进行实名认证重新获取cookie，多次尝试<br>



## 感谢

[Nobyda](https://github.com/NobyDa/Scrip)<br>

[Chavy](https://github.com/chavyleung/script)
