<template>
  <div>
    <div class="container">

      <div v-for="(image) in myImages" class="slides fade" :key="image">
        <img :src="image[Object.keys(image)[0]]" :alt="image[Object.keys(image)[1]]"/>
        <div v-if="showText" class="text">{{ image[Object.keys(image)[1]] }}</div>
      </div>

      <a class="prev" @click.prevent="plusSlides(-1)">&#10094;</a>
      <a class="next" @click.prevent="plusSlides(1)">&#10095;</a>
    </div>

    <div v-if="showDots" class="dots">
      <span v-for="(_, index) in myImages" class="dot" :key="index" @click.prevent="currentSlide(index+ 1)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
      slideIndex: 1,
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
      default: true
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
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("slides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
    plusSlides(n) {
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

/* Slideshow container */
.container {
  width: 100%;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.slides {
  display: none;
}

.slides img {
  width: 100%;
}

/* Next & previous buttons */
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

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 4px;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.dots {
  margin-top: 5px;
  text-align: center;
}

/* The dots/bullets/indicators */
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

/* Fading animation */
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
