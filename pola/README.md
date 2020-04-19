# **泼辣修图**<br>



脚本理论上该脚本兼QuanX 和 Surge，使用一份即可<br>





## 配置(Quanx)<br>

```

[MIMT]

api.polaxiong.com

[rewrie_local]

https:\/\/api\.polaxiong\.com\/v1\/payments\/appleiap\/receipts/confirmation url script-request-body pola.js



```

## 配置(Surge)<br>
```
[MIMT]

api.polaxiong.com

[Script]

pola.js = type=http-request,pattern=^https:\/\/api\.polaxiong\.com\/v1\/payments\/appleiap\/receipts/confirmation,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/pola/pola.js,script-update-interval=0


```




## 说明<br>

1、需要注册并且登录泼辣修图的账户<br>


2、为什么恢复购买会提示没有购买记录？<br>

* 可以忽略，只要返回界面看到图层模块解锁，就说明恢复成功<br>


4、不成功解决办法：多次尝试<br>
​

## 感谢

[Nobyda](https://github.com/NobyDa/Scrip)<br>

[Chavy](https://github.com/chavyleung/script)
