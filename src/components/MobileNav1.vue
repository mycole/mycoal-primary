<template>
  <!-- https://codepen.io/tahazsh/pen/yGoYBb 
  https://tahazsh.com/detect-outside-click-in-vue
  -->
  <div>
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
      <ul>
        <li>Test Popup Box</li>
      </ul>
    </div>
  </div>
</template>

<script>
let handleOutsideClick;

export default {
  data() {
    return {
      showPopup: false
    };
  },
  methods: {
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
.toggle-button {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border: 0;
  border-radius: 2px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
}

.toggle-button:hover {
  background: rgb(214, 214, 214);
}

.popup-box {
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  background: #F0F8FF;
  border-radius: 1px;
  box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  color: #555585;
}
</style>