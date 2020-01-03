<template>
  <div>
    <div class="about-content">
      <hr class="name" data-content="about mycoal">

      <div class="about-artist-image"></div>
      <br>
      <h3>
        <i>
          <b>under construction</b>
        </i>
      </h3>

      <br>
      <h3>aspiring web developer</h3>
      <br>
      <h5>pardon the lack of..
        <br>
        <br>a website.
      </h5>
      <p>
        <br>my name is michael (my-coal), a husker transplant living in the mile high.
        <br>as a gradute of The University of Nebraska - Lincoln, I studied the biological sciences
        with full intentions of pursuing further education, whether it be med, grad, or law school,
        but ultimately decided on packing my bags and joining the work force in denver, colorado.
        <br>although I maintain exposure to the scientific field, as a clinical research assistant to a
        radiology practice here in Denver, I have always seemed to gravitate back towards computer programming,
        or more specifically these days, web development. i've grown a huge fascination with data; not only the numbers
        but everything and anything that can tell a story.
        <br>during my spare time, i have been re-engaging in my knowledge of programming/web development
        and have taken time to jump into javascript primarily, including vue, mongo, mongoose, and similar
        frameworks.
        <br>with my introduction out of the way, i hope to continue my pursuit of learning programming/web development
        as it tends to be where i feel most satisfaction, since every day i learn something new that will help me
        be able to develop more robust, and pretty web pages and apps.
      </p>
      <br>
      <h4>
        stay tuned for more to come - take a look at what i'm currently working on as of {{new Date().toLocaleString() }} by
        visiting the projects page
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutContent",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://fonts.googleapis.com/css?family=Oswald&display=swap";

h3 {
  color: black;
}

.about-content {
  width: 75%;
  margin: 0 auto;
}

.about-artist-image {
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  background-image: url(https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  width: 300px;

  border-style: solid;
  border-color: black;
  border-width: 2px;

  box-shadow: 0px 15px 15px -5px rgba(0, 0, 0, 0.75);
}

hr.name {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 1;
  font-family: "Oswald", sans-serif;
  font-size: 28px;
}
hr.name:before {
  content: "";
  background: linear-gradient(to right, transparent, #000000, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2px;
}
hr.name:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: black;
  padding: 0 0.5em;
  line-height: 1.5em;
  color: #000000;
  background-color: #f5f1e7;
}
</style>
