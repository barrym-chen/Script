# **艺龙酒店转盘抽奖**<br>



该脚本理论上该脚本兼QuanSurge，使用一份即可<br>



## 配置(Quanx)<br>

```

[MIMT]

m.elong.com

[rewrie_local]

^https:\/\/m\.elong\.com\/my\/rafflemileagejson\/getRaffleMileageTodayCount url script-request-header elong_draw_cookie.js

[task_local]

0 0 * * * elong_draw.js

```

## 获取cookie说明<br>

1、登录艺龙旅行，然后点击签到，`幸运抽大奖`进入即可即可获取cookie<br>

2、为什么签到异常？<br>

* 可能你没有进行实名认证<br>

* 也可能账户异常<br>


3、解决办法：进行实名认证重新获取cookie，多次尝试


## 感谢

[Nobyda](https://github.com/NobyDa/Scrip)<br>

[Chavy](https://github.com/chavyleung/script)
