<template>
  <div>
    <div id="app">
      <div class="NavContainer">
        <NavLinks></NavLinks>
      </div>
      <br>
      <br>
      <router-view/>

      <div class="footer-container">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import NavLinks from "@/components/ResponsiveNav3.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    NavLinks,
    Footer
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;

  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;

  padding: 0px;
  background-color: #f5f1e7;
}

html,
body {
  background-color: #f5f1e7;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}

.NavContainer {
  z-index: 100;
}

.footer-container {
  position: relative;
  width: 100%;
}
</style>
