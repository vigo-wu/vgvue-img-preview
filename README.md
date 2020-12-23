# vgvue-img-preview 简介

> 本组件是一个基于 vue 编写的 vue 图片预览组件，支持单图和多图预览，仅传入一个图片地址，即可实现图片预览效果，比较适合给文章及页面的所有图片添加预览效果。预览背景色，关闭按钮颜色，控制条的背景也和字体颜色都可自定义，兼容 ie9+，火狐，Safari，谷歌浏览器，支持多图预览

## 安装

```
# 安装
npm install vgvue-img-preview --save

# main.js 引入
import vgvueImgPreview from 'vgvue-img-preview'
Vue.use(vgvueImgPreview)

# 使用
给任意对象添加任意事件，例如
<img :src="src" @click="previewImg(url)">
即可在事件里调用方法进行预览
methods: {
	previewImg (url) {
		this.$vgvueImgPreview(url)
	}
}

```

## 使用

> this.\$vgvueImgPreview() 方法可以接收一个字符串类型的 url，或者对象类型的配置，具体使用方法如下

- 接收一个地址字符串`this.$vgvueImgPreview(url)`

```
this.$vgvueImgPreview('https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg') // 线上地址
this.$vgvueImgPreview('./img/logo.jpeg') // 本地地址
```

- 接收一个对象`this.$vgvueImgPreview(options)`

```
# 单图预览
this.$vgvueImgPreview({
    url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
    mainBackground: 'rgba(0, 0, 0, .5)', // 整体背景颜色
})

# 多图预览
this.$vgvueImgPreview({
    multiple: true, // 开启多图预览模式
    nowImgIndex: 1, // 多图预览，默认展示第二张图片
    imgList: ['1.png', '2.png', '3.png'], // 需要预览的多图数组
    mainBackground: 'rgba(0, 0, 0, .5)', // 整体背景颜色
})
```

具体可配置项如下

| 字段              | 值                                       | 备注                           |
| ----------------- | ---------------------------------------- | ------------------------------ |
| url               | 图片的本地或者线上地址，多图预览时可不传 | 预览的图片地址，多图预览时省略 |
| mainBackground    | `#fff` 或者 `rgba(255,255,255,.1)`       | 整体背景颜色（可选）           |
| controlColor      | `#fff` 或者 `rgba(255,255,255,.1)`       | 控制条字体颜色（可选）         |
| controlBackground | `#fff` 或者 `rgba(255,255,255,.1)`       | 控制条背景颜色 （可选）        |
| closeColor        | `#fff` 或者 `rgba(255,255,255,.1)`       | 关闭图标的颜色 （可选）        |
| multiple          | 布尔值 true/false                        | 是否多图预览                   |
| nowImgIndex       | Number 格式，如默认展示第二张，传入 1    | 多图预览时默认显示的图片下标   |
| imgList           | Array 格式 [url1, url2, url3]            | 多图预览时传入的数组           |
| keyboard          | 布尔值 true/false                        | 是否开启键盘控制               |

如开启键盘控制事件后，相对应功能控制按键如下
| 按键 | 功能  
| ----------------- | ----------------------------------------
| w | 放大
| s | 缩小
| a | 上一张
| d | 下一张
| q | 逆时针旋转
| e | 顺时针旋转
| r | 图片复位
| esc | 关闭图片预览

\*如不考虑兼容性问题，上述的背景颜色均可接收渐变色

