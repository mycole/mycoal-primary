<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="about-content">
      <AboutContent></AboutContent>
    </div>
  </div>
</template>

  <script>
import AboutContent from "@/components/AboutContent.vue";

export default {
  name: "about",
  components: {
    AboutContent
  },
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
