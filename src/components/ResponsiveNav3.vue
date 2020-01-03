<template>
  <!-- https://codepen.io/tahazsh/pen/yGoYBb 
  https://tahazsh.com/detect-outside-click-in-vue
  -->
  <div>
    <div class="Nav-Container">
      <div class="Navbar" :class="{ 'hidden-navbar': !showNavbar }">
        <div class="Navbar-Link Navbar-Link-Name">
          <router-link to="/">mycoal</router-link>
        </div>

        <nav class="Navbar-Items">
          <div class="Navbar-Link">
            <router-link to="/">mycoal</router-link>
          </div>

          <div class="Navbar-Link">
            <router-link to="/About.vue">about</router-link>
          </div>
          <div class="Navbar-Link">
            <router-link to="/Experience.vue">experience</router-link>
          </div>

          <div class="Navbar-Link">
            <router-link to="/Projects.vue">projects</router-link>
          </div>

          <div class="Navbar-Link">
            <router-link to="/TestingGrounds.vue">testing grounds</router-link>
          </div>
        </nav>

        <div class="ButtonDiv">
          <button ref="button" class="toggle-button" @click="showPopup = !showPopup">
            <i class="fas fa-bars"></i>
          </button>
          <div
            v-show="showPopup"
            v-closable="{
      exclude: ['button'],
      handler: 'onClose'
    }"
            class="popup-box"
          >
            <ul class="mobileLinks">
              <li>
                <router-link to="/About.vue">about</router-link>
              </li>
              <li>
                <router-link to="/Experience.vue">experience</router-link>
              </li>
              <li>
                <router-link to="/Projects.vue">projects</router-link>
              </li>
              <li>
                <router-link to="/TestingGrounds.vue">testing grounds</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let handleOutsideClick;
const OFFSET = 60;

export default {
  data() {
    return {
      showPopup: false,
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
    onClose() {
      this.showPopup = false;
    }
  },
  events: {
    closeEvent: function() {
      console.log("close event called");
      this.hide();
    }
  },
  directives: {
    closable: {
      bind(el, binding, vnode) {
        handleOutsideClick = e => {
          e.stopPropagation();
          const { handler, exclude } = binding.value;
          let clickedOnExcludedEl = false;
          exclude.forEach(refName => {
            if (!clickedOnExcludedEl) {
              const excludedEl = vnode.context.$refs[refName];
              clickedOnExcludedEl = excludedEl.contains(e.target);
            }
          });
          if (!el.contains(e.target) && !clickedOnExcludedEl) {
            vnode.context[handler]();
          }
        };
        document.addEventListener("click", handleOutsideClick);
        document.addEventListener("touchstart", handleOutsideClick);
      },

      unbind() {
        document.removeEventListener("click", handleOutsideClick);
        document.removeEventListener("touchstart", handleOutsideClick);
      }
    }
  }
};
</script>


<style scoped>
@import "https://fonts.googleapis.com/css?family=Oswald&display=swap";

.Nav-Container {
  display: flex;
  position: fixed;
  z-index: 1000;
}

.Navbar {
  display: flex;

  width: 100vw;
  height: 75px;

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

.ButtonDiv {
  display: none;
}

.Navbar-Items {
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
}

.Navbar-Link a {
  color: white;
}

.Navbar-Link {
  padding-right: 14px;
  text-decoration: none;
  color: white;
}

.toggle-button {
  background: rgba(230, 230, 230, 0.205);
  color: rgb(255, 255, 255);
  border: 0;
  border-radius: 3px;
  padding: 6px;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid black;
  transition: 0.2s all;
}

.toggle-button:hover {
  background: rgb(85, 84, 84);
  color: #FFF;
}

.popup-box {
  position: absolute;
  left: -7em;
  top: 50px;
  width: 300px;
  transform: translateX(-50%);
  background: #F0F8FF;
  border-radius: 1px;
  box-shadow: 1px 1px 15px 0 rgb(0, 0, 0);
  padding: 40px;
  color: #555585;
}

.Navbar-Link-Name {
  display: none;
}

.mobileLinks {
  list-style-type: none;
  padding: 0px;
  margin: 0 auto;
}

.mobileLinks a {
  color: black;
  font-size: 22px;
}

@media only screen and (max-width: 768px) {
  .ButtonDiv {
    display: initial;
    position: absolute;
    right: 5%;
  }

  .Navbar-Link-Name {
    display: initial;
    margin: 0 auto;
    font-size: 28px;
  }

  .Navbar-Items {
    display: none;
  }
}
</style>