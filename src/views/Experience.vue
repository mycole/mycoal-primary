<template>
  <div>
    <div class="experience-container">
      <SkillsContainer/>
    </div>
  </div>
</template>

<script>
import SkillsContainer from "@/components/SkillsContainer.vue";

export default {
  name: "HelloWorld",
  components: {
    SkillsContainer
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.experience-container {
  display: flex;
  justify-content: center;
  

  margin-top: 30px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.247);
  border-width: 2px;

  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
}
</style>
