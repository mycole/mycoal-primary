<template>
  <div class="card-container">
    <div class="card">
      <img
        src="https://pbs.twimg.com/profile_images/1164648640503140352/EEZ03Bmq_400x400.jpg"
        class="card-image"
      >
      <h1>Project1</h1>
      <p class="title">CEO & Founder, Example</p>
      <p>University of Nebraska - Lincoln</p>
      <div style="margin: 24px 0;">
        <a href="#">
          <i class="fa fa-dribbble"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fa fa-facebook"></i>
        </a>
      </div>
      <p>
        <button>Contact</button>
      </p>
    </div>
  </div>
</template>

<script>
</script>



<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

.card-container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin: 0 auto;
  height: 80%;
  width: 100%;
}

.card-image {
  width: 100%;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 200px;
  margin: 0 auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}
</style>