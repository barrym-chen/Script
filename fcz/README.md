# **非常准签到**<br>



该脚本理论上该脚本兼QuanSurge，使用一份即可<br>



## 配置(Quanx)<br>

```

[MIMT]

activity.m.duiba.com.cn

[rewrie_local]

^https:\/\/activity\.m\.duiba\.com\.cn\/signactivity\/getSignInfo? url script-request-header fcz_cookie.js

[task_local]

0 0 * * * fcz_sign.js

```

## 获取cookie说明<br>

1、登录非常准pro的个人页面，然后点击签到，进入即可即可获取cookie<br>

2、为什么没有找到签到位置？<br>

* 可能你用的不是非常准pro版本<br>

* 也可能账户异常<br>


3、解决办法：重新获取cookie，多次尝试


## 感谢

[Nobyda](https://github.com/NobyDa/Scrip)<br>

[Chavy](https://github.com/chavyleung/script)
