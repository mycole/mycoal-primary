<template>
  <div class="card-box">
    <InfoCard/>
    <InfoCard/>
  </div>
</template>


<script>
import InfoCard from "@/components/InfoCard.vue";

export default {
  components: {
    InfoCard
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.card-box {
  display: flex;
  padding: 5px;
}
</style>