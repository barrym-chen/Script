# **工银e生活签到**<br>


该脚本理论上该脚本兼QuanSurge，使用一份即可<br>

## 配置(Quanx)<br>
```

[MIMT]

icbc1.wlphp.com:8444

[rewrie_local]

^https:\/\/icbc1\.wlphp\.com:8444\/js\/api\/index\/signIn url script-request-body icbc_cookie.js

[task_local]

0 0 * * *icbc_sign.js

```

## 获取cookie说明<br>

1、需要工商银行的银行卡`是签到的基础`

2、在工银e生活app主页，欢趣签到内手动签到一次即可获取cookie成功

3、为什么会不能成功获取到cooki？<br>

* 一方面可能是没有签到过<br>

* 可能没有绑卡<br>

4、解决办法：手动签到数天，即可玄学获取cookie成功（看脸)

## 感谢

[Nobyda](https://github.com/NobyDa/Scrip)<br>

[Chavy](https://github.com/chavyleung/script)
