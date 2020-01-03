<template>
  <div>
    <div class="rela-block footer">
      <div class="rela-block social-buttons-container">
        <div class="social-button facebook-button"></div>
        <div class="social-button insta-button"></div>
        <div class="social-button linkedin-button"></div>
      </div>
      <div class="rela-block footer-links-container">
        <div class="footer-flex-column">
          <ul>About
            <li>mycoal</li>
            <li>experience</li>
            <li>projects</li>
          </ul>
        </div>
        <div class="footer-flex-column">
          <ul>Connect
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>E-mail</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

    <script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.rela-block {
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
}
.footer {
  min-height: 100px;
  background-color: #b30d0d;
  box-sizing: border-box;
  border-top: 6px solid #000000;
  color: #fff;
  margin-bottom: 0;
  width: 100%;
  bottom: 0;
}
.social-buttons-container {
  min-height: 100px;
  width: 100%;
  max-width: 1000px;
  margin: 20px auto 0;
  text-align: center;
}
.social-button {
  display: inline-block;
  position: relative;
  transform: scale(0.75);
  height: 75px;
  width: 75px;
  background-size: cover !important;
  transition: 0.3s ease;
  margin: 14px 2px;
  cursor: pointer;
}
.social-button:hover {
  transform: scale(1);
  transition: 0.3s cubic-bezier(0.3, 0.2, 0, 2.5);
}
.social-button.twitter-button {
  background: url("https://cdn4.iconfinder.com/data/icons/social-icon-4/842/twitter-256.png")
    no-repeat center;
}
.social-button.facebook-button {
  background: url("https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-256.png")
    no-repeat center;
}
.social-button.pinterest-button {
  background: url("https://cdn4.iconfinder.com/data/icons/social-icon-4/842/pinterest-256.png")
    no-repeat center;
}
.social-button.insta-button {
  background: url("https://cdn4.iconfinder.com/data/icons/social-icon-4/842/instagram-256.png")
    no-repeat center;
}
.social-button.linkedin-button {
  background: url("https://cdn4.iconfinder.com/data/icons/social-icon-4/842/linkedin-256.png")
    no-repeat center;
}
.footer-links-container {
  display: flex;
  width: 90%;
  max-width: 950px;
  margin: 30px auto 80px;
  text-align: center;
}
.footer-links-container .footer-flex-column {
  position: relative;
  flex: 1 1 0;
  text-align: center;
  border-right: 1px solid #555;
}
.footer-links-container .footer-flex-column:last-child {
  border: none;
}
.footer-links-container .footer-flex-column ul {
  position: relative;
  width: 100%;
  max-width: 200px;
  margin: auto;
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-transform: uppercase;
}
.footer-links-container .footer-flex-column li {
  display: block;
  position: relative;
  margin: 15px 7px;
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;
}
.footer-links-container .footer-flex-column li:hover {
  color: rgb(255, 199, 250);
}
@media screen and (max-width: 500px) {
  .social-buttons-container {
    max-width: 200px;
  }

  .footer-links-container {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
  }

  .footer-flex-column {
    max-width: 300px;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
  }
  .footer-links-container .footer-flex-column {
    border-bottom: 1px solid #555;
    border-right: none;
  }
}
</style>

