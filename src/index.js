import Carousel from "./Carousel.vue";

export default {
  install(Vue, options) {
    Vue.component("vue-easy-carousel", Carousel);
  }
};
