<template>
  <div class="skills-container">
    <div class="card">
      <img class="skill-logo" :src="item.logo">
      <div class="container">
        <p class="card-title">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {};
  },
  props: {
    // this component expects a prop of type object
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.skills-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

.skill-logo {
  max-width: 50px;
}

.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 110px;
  height: 110px;
  padding: 0px;
  background-color: white;
}

.card-title {
  font-size: 14px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
}
</style>
