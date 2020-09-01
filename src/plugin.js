import Carousel from './Carousel.vue'

export default function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VueEasyCarousel', Carousel)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
