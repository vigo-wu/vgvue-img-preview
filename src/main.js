import Vue from 'vue'
import App from './App.vue'
import vgvueImgPreview from './lib/index'
// import 'babel-polyfill'
Vue.use(vgvueImgPreview)

new Vue({
  el: '#app',
  render: h => h(App)
})
