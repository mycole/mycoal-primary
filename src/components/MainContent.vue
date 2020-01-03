<template>
  <div>
    <br>
    <br>
    <br>
    <div class="main-content">
      <CardBox/>
      <!--   <Carousel></Carousel> -->
    </div>
  </div>
</template>

<script>
import CardBox from "@/components/CardBox.vue";
// import Carousel from "@/components/CarouselOne.vue";

export default {
  name: "MainContent",
  components: {
    //  Carousel,
    CardBox
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content {
  display: flex;
  margin: 0 auto;
  width: 75vw;
  height: 85vh;
  border-style: solid;
  border-color: black;
  border-width: 2px;
  box-shadow: 0px 16px 17px -9px rgba(0, 0, 0, 0.75);
}
</style>
