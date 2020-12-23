/*
 * @Author: heyongsheng
 * @Date: 2020-04-22 15:40:42
 * @Last Modified by: heyongsheng
 * @Last Modified time: 2020-07-08 22:49:13
 */
import Vue from 'vue'
import VueToast from './vgvue-img-preview.vue'

const ToastConstructor = Vue.extend(VueToast)

const instance = new ToastConstructor().$mount()

const Toast = (options = {}) => {
  if (typeof options === 'string') {
    instance.url = options
  } else if (typeof options === 'object' && options.constructor !== Array) {
    instance.url = options.url
  } else {
    if (options.constructor !== Array) {
      console.error('vgvue-img-preview 组件参数仅能接收字符串和对象，但您传入的是 ' + typeof options + '\nvgvue-img-preview parameter can only receive strings and objects, but what you pass in is ' + typeof options)
    } else {
      console.error('vgvue-img-preview 组件参数仅能接收字符串和对象，但您传入的是 array\nvgvue-img-preview parameter can only receive strings and objects, but what you pass in is array')
    }
    return
  }
  instance.mainBackground = options.mainBackground || 'rgba(0, 0, 0, .65)'
  instance.controlColor = options.controlColor
  instance.controlBackground = options.controlBackground || 'rgba(66, 66, 66, .8)'
  instance.closeColor = options.closeColor || 'rgba(200, 200, 200, .8)'
  instance.multiple = options.multiple
  instance.nowImgIndex = options.nowImgIndex
  instance.imgList = options.imgList
  instance.keyboard = options.keyboard || false
  instance.show = true
  instance.instance = instance

  document.body.appendChild(instance.$el)
}

const install = (Vue) => {
  Vue.prototype.$vgvueImgPreview = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default install
