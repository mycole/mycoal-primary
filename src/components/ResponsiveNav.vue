<template>
  <div>
    <div class="nav-container">
      <div class="Navbar" :class="{ 'hidden-navbar': !showNavbar }">
        <div class="Navbar__Link Navbar__Link-brand">
          <router-link to="/">mycoal</router-link>
        </div>
        <div class="Navbar__Link Navbar__Link-toggle">
          <i class="fas fa-bars"></i>
        </div>
        <nav class="Navbar__Items">
          <div class="Navbar__Link">
            <router-link to="/About.vue">about</router-link>
          </div>
          <div class="Navbar__Link">
            <router-link to="/Experience.vue">experience</router-link>
          </div>

          <div class="Navbar__Link">
            <router-link to="/Projects.vue">projects</router-link>
          </div>

          <div class="Navbar__Link">
            <router-link to="/TestingGrounds.vue">testing grounds</router-link>
          </div>
        </nav>

        <nav class="Navbar__Items Navbar__Items--right">
          <div class="Navbar__Link">
            <a href="https://www.linkedin.com/in/mhernandez90">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <!--  <div class="Navbar__Link">Link</div> -->
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
const OFFSET = 60;

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    };
  },

  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);

    document
      .querySelector(".Navbar__Link-toggle")
      .addEventListener("click", this.classToggle);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
    classToggle() {
      const navs = document.querySelectorAll(".Navbar__Items");

      navs.forEach(nav => nav.classList.toggle("Navbar__ToggleShow"));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://fonts.googleapis.com/css?family=Oswald&display=swap";

.nav-container {
  display: flex;
  position: fixed;
  z-index: 1000;
}

.Navbar {
  display: flex;

  width: 100vw;
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
  background-color: #b30d0d;

  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 2px;
  border-color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 16px;
  text-decoration: none;
  font-size: 18px;

  font-family: "Oswald", sans-serif;
}

.Navbar.hidden-navbar {
  box-shadow: none;
  transform: translate3d(0, -120%, 0);
}

.Navbar__Items {
  display: flex;
  text-decoration: none;
}

.Navbar__Link a {
  color: white;
}

.Navbar__Link {
  padding-right: 14px;
  text-decoration: none;
  color: white;
}

.Navbar__Items--right {
  margin-left: auto;
}

.Navbar__Link-toggle {
  display: none;
}

@media only screen and (max-width: 768px) {
  .Navbar__Items,
  .Navbar {
    flex-direction: column;
  }
  .Navbar__Items {
    display: none;
  }
  .Navbar__Items--right {
    margin-left: 0;
  }

  .Navbar__ToggleShow {
    display: flex;
    color: white;
  }

  .Navbar__Link-toggle {
    align-self: flex-end;
    display: initial;
    position: absolute;
    cursor: pointer;
  }

  .Navbar__Link-brand {
    font-size: 22px;
    color: yellow;
  }
}
</style>
