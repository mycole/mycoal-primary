<template>
  <div>
    <agile :initial-slide="0">
      <img
        class="slide"
        src="https://images.agriculture.mdpcdn.com/sites/default/files/image/2019/03/17/state-nebraska.jpg"
      >
      <img
        class="slide"
        src="https://res.cloudinary.com/mycoal90/image/upload/v1571963139/webdev/colorado_lpa7ka.jpg"
      >
      <img
        class="slide"
        src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      >
      <img
        class="slide"
        src="https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      >
      <img
        class="slide"
        src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      >
      <img
        class="slide"
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      >
      <img
        class="slide"
        src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      >
      <img
        class="slide"
        src="https://images.unsplash.com/photo-1529815481058-55e5b656f6d6?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      >
      <template slot="prevButton">
        <i class="fas fa-chevron-left"></i>
      </template>
      <template slot="nextButton">
        <i class="fas fa-chevron-right"></i>
      </template>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "Carousel",
  components: {
    agile: VueAgile
  }
};
</script>

<style lang="scss">
@import url("https://unpkg.com/vue-agile@latest/dist/VueAgile.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css");

.agile {
  &__nav-button {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 24px;
    height: 100%;
    position: absolute;
    top: 0;
    transition-duration: 0.3s;
    width: 80px;
    &:hover {
      background-color: rgba(black, 0.5);
      opacity: 1;
    }
    &--prev {
      left: 0;
    }
    &--next {
      right: 0;
    }
  }
  &__dots {
    bottom: 10px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
  &__dot {
    margin: 0 10px;
    button {
      background-color: transparent;
      border: 1px solid white;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      height: 10px;
      font-size: 0;
      line-height: 0;
      margin: 0;
      padding: 0;
      transition-duration: 0.3s;
      width: 10px;
    }
    &--current,
    &:hover {
      button {
        background-color: white;
      }
    }
  }
}

// Slides styles
.slide {
  display: block;
  height: 500px;
  object-fit: cover;
  width: 100%;
  border-color: black;
  border-width: 2px;

  border-top-style: solid;
  border-bottom-style: solid;
  -webkit-box-shadow: 0px 14px 29px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 14px 29px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 14px 29px 0px rgba(0, 0, 0, 0.75);
}
</style>