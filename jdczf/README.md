# **京东成长分签到**<br>



该脚本理论上该脚本兼QuanSurge，使用一份即可<br>


## 配置(Quanx)<br>

```

[MIMT]

api.m.jd.com

[rewrie_local]

^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/bt\/h5\/m\/queryUserSignFlow url script-request-header jdczf_cookie.js

[task_local]

0 0 * * * jdczf.js

```

## 获取cookie说明<br>

1、需要通过京东学生认证这是`签到的基础`,<br>

2、点击京东app->`我的`->`小白成长分`即可获取cookie成功<br>

3、为什么会无法签到或者报错？<br>

* 可能是没有进行京东学生认证<br>

* 也可能京东账户黑号<br>

4、解决办法：进行学生认证（非常宽松）


## 感谢

[Nobyda](https://github.com/NobyDa/Scrip)<br>

[Chavy](https://github.com/chavyleung/script)
