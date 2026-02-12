<template>
  <div>
    <div class="slides-container">

      <div
          v-for="(image, index) in myImages"
          v-show="slideIndex === index + 1"
          class="slides"
          :class="animation"
          :key="index"
      >
        <component :is="image.link ? 'a' : 'span'" :href="image.link" :target="image.link ? '_blank' : null" :style="image.link ? '' : 'cursor: default'">
          <img :src="image.image" :alt="image.text"/>
        </component>
        <div v-if="showText" class="text">{{ image.text }}</div>
      </div>

      <a v-if="showArrows" class="prev" @click.prevent="nextSlide(-1)">&#10094;</a>
      <a v-if="showArrows" class="next" @click.prevent="nextSlide(1)">&#10095;</a>

    </div>

    <div v-if="showDots" class="dots">
      <span v-for="(_, index) in myImages" class="dot" :key="index"
            :class="{ 'active': slideIndex === index + 1 }"
            @click.prevent="currentSlide(index+ 1)"></span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
      slideIndex: 1,
      intervalId: null
    }
  },
  props: {
    myImages: {
      type: Array,
      required: false, //true
      default: () => [],
    },
    showText: {
      type: Boolean,
      default: false
    },
    showDots: {
      type: Boolean,
      default: false
    },
    showArrows: {
      type: Boolean,
      default: true
    },
    timeSlide: {
      type: Number,
    },
    animation: {
      type: String,
      default: null
    }
  },
  mounted() {
    if(this.timeSlide > 0){
      this.intervalId = setInterval(() => {
        this.nextSlide(1)
      }, this.timeSlide)
    }
  },
  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  },
  methods: {
    nextSlide(n) {
      let newIndex = this.slideIndex + n;
      if (newIndex > this.myImages.length) {
        newIndex = 1;
      }
      if (newIndex < 1) {
        newIndex = this.myImages.length;
      }
      this.slideIndex = newIndex;
    },
    currentSlide(n) {
      this.slideIndex = n;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box
}

.slides-container {
  width: 100%;
  position: relative;
  margin: auto;
}

.slides img {
  width: 100%;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #f2f2f2;
  font-size: 18px;
  padding: 8px 12px;
  position: absolute;
  bottom: 4px;
  width: 100%;
  height: 55px;
  font-weight: bold;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
}

.dots {
  margin-top: 5px;
  text-align: center;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fade animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: .4
  }
  to {
    opacity: 1
  }
}

@keyframes fade {
  from {
    opacity: .4
  }
  to {
    opacity: 1
  }
}
</style>
