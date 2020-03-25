# **携程旅行签到**<br>



该脚本理论上该脚本兼QuanSurge，使用一份即可<br>



## 配置(Quanx)<br>

```

[MIMT]

m.ctrp.com

[rewrie_local]

^https:\/\/m\.ctrip\.com\/restapi\/soa2\/14946\/json\/userBaseInfo url script-request-header ctrip_cookie.js

[task_local]

0 0 * * * ctrip.js

```

## 获取cookie说明<br>

1、登录携程旅行，然后点击我的，`我的积分`进入即可即可获取cookie<br>

2、为什么签到异常？<br>

* 可能你没有进行实名认证<br>

* 也可能账户异常<br>


3、解决办法：进行实名认证重新获取cookie，多次尝试


## 感谢

[Nobyda](https://github.com/NobyDa/Scrip)<br>

[Chavy](https://github.com/chavyleung/script)
