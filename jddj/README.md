# **京东到家签到**<br>


该脚本理论上该脚本兼QuanSurge，使用一份即可<br>

该版本为最原始自用版本介意勿用<br>


## 配置(Quanx)<br>

```

[MIMT]

api.m.jd.com, ms.jr.jd.com

[rewrie_local]

^https:\/\/daojia\.jd\.com\/client? url script-request-header jddj_cookie.js


[task_local]


0 0 * * * jddj.js

```

## 获取cookie说明<br>

1、在京东app内的`京东超市`->`1小达`即可获取到cookie

2、禁止频繁发起签到，不然获取到的cookie就会异常，再次签到就会提示账户风险问题，正常一次行了

3、为什么会频繁提示成功获取到cookie？<br>

* 因为我没与加上对于cookie的更新，所以就会提示多次，小问题

4、解决办法：获取到cooki就将这条rewrit注释掉就好了，更新cookie时在启用


## 感谢

[Nobyda](https://github.com/NobyDa/Scrip)<br>

[Chavy](https://github.com/chavyleung/script)
