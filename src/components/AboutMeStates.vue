<template>
  <div class="states-container">
    <div class="states">
      <div class="nebraska">
        <p>nebraska</p>
      </div>
      <div class="colorado">
        <p>colorado</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMeStates"
};
</script>



<style scoped>
@import "https://fonts.googleapis.com/css?family=Oswald&display=swap";

.states-container {
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: center;
  align-items: center;

  border-style: solid;
  border-width: 2px;
  border-color: black;

  background-color: red;
}

.states {
  display: flex;
  flex-flow: row;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  color: white;
  background-color: rgb(114, 114, 114);
  width: 85%;
  margin: 0 auto;
}

.nebraska {
  background-image: url(https://res.cloudinary.com/mycoal90/image/upload/v1570628030/webdev/NE_black_ctzgsj.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 50%;
  height: 200px;
  padding: 10px;
}

.nebraska p,
.colorado p {
  position: relative;
  top: 40%;
  font-size: 22px;

  font-family: "Oswald", sans-serif;
}

.colorado {
  background-image: url(https://res.cloudinary.com/mycoal90/image/upload/v1570628030/webdev/CO_black_lbwgyq.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 50%;
  height: 200px;
  padding: 10px;
}
</style>