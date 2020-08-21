<template>
  <div>
    <div class="slides-container">

      <div v-for="(image, index) in myImages" ref="slides" class="slides fade" :key="index">
        <img :src="image.image" :alt="image.text"/>
        <div v-if="showText" class="text">{{ image.text }}</div>
      </div>

      <a class="prev" @click.prevent="nextSlide(-1)">&#10094;</a>
      <a class="next" @click.prevent="nextSlide(1)">&#10095;</a>

    </div>

    <div v-if="showDots" class="dots">
      <span v-for="(_, index) in myImages" ref="dot" class="dot" :key="index"
            @click.prevent="currentSlide(index+ 1)"></span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
      slideIndex: 1
    }
  },
  props: {
    myImages: {
      type: Array,
      required: true,
      default: () => [],
    },
    showText: {
      type: Boolean,
      default: false
    },
    showDots: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.showSlides(this.slideIndex)
  },
  methods: {
    showSlides(x) {
      let i;
      let slides = this.$refs.slides;
      if (x > slides.length) {
        this.slideIndex = 1
      }
      if (x < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex - 1].style.display = "block";
      if (this.showDots) {
        let dots = this.$refs.dot;
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[this.slideIndex - 1].className += " active";
      }
    },
    nextSlide(n) {
      this.showSlides(this.slideIndex += n);
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
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

.slides {
  display: none;
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
