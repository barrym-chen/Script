# **京东金融提鹅活动**<br>


该脚本理论上该脚本兼Quanx & Surge，使用一份即可<br>

## 配置(Quanx)<br>


```
[MIMT]

api.m.jd.com, ms.jr.id.com


[rewrie_local
^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/base\/h5\/m\/recommendGetWay url script-request-header tie_cookie.js


[task_local
0 0 * * * tie_sign.js

```
## 获取cookie说明<br>


1、在京东金融app内搜索`摇钱树`即可进入小游戏页面，然会选择`提鹅小游戏`,先参加一下这个活动，这是前提<br>

2、在浏览直接访问https://jdde.jd.com/btyingxiao/marketing/html/index.html?   登录京东账户即可获取cookie

3、为什么会不能签到成功？或者签到异常？<br>

* 可能是没有在京东金融app参加该活动<br>

* 也可能是未知原因<br>

## 感谢

[Nobyda](https://github.com/NobyDa/Scrip)<br>


[Chavy](https://github.com/chavyleung/script)
