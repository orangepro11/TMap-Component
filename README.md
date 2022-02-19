## TMap是基于天地图API封装的vue版

[天地图官方API文档](http://lbs.tianditu.gov.cn/api/js4.0/guide.html)

## 申请API KEY

[申请地址](http://lbs.tianditu.gov.cn/home.html)

注册账号后申请key即可。

## 安装

```
npm install tmap-component
```

## 快速上手

```vue
<template>
  <div>
    <t-map map-key="0dc07d038e7ee6518532101750a96c5a" width="100%" height="100vh" />
  </div>
</template>

<script>
import TMap from 'tmap-component';

export default {
  name: 'Home',
  components: {
    TMap,
  },
};
</script>

```

上面的key可以正常调用，但是日调用量受限，需要开发者自行申请key。

## 开发计划表

- [x] 自动引入script
- [x] 设置中心点点经纬度
- [x] 设置默认缩放级别
- [ ] 添加markers属性
- [ ] 添加搜索控件
- [ ] 添加区域覆盖物
- [ ] markers点聚合