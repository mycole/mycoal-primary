<template>
  <div>
    <div class="main-content">
      <br>
      <Carousel></Carousel>
      <AboutContent/>
      <SkillsContainer/>
    </div>
    <br>
    <br>
  </div>
</template>

  <script>
import Carousel from "@/components/CarouselOne.vue";
import AboutContent from "@/components/AboutContent.vue";
import SkillsContainer from "@/components/SkillsContainer.vue";

export default {
  name: "home",
  components: {
    Carousel,
    AboutContent,
    SkillsContainer
  },
  data() {
    return {
      msg: "Dies ist dein vue Applikation"
    };
  }
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Oswald&display=swap";

h4 {
  color: black;
  font-family: "Oswald", sans-serif;
}
</style>
