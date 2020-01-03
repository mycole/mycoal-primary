import Vue from "vue";
import Router from "vue-router";
import Main from "@/views/Main.vue";
import About from "@/views/About.vue";
import Experience from "@/views/Experience.vue";
import Projects from "@/views/Projects.vue";
import TestingGrounds from "@/views/TestingGrounds.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/About.vue",
      name: "About",
      component: About
    },
    {
      path: "/Experience.vue",
      name: "Experience",
      component: Experience
    },
    {
      path: "/Projects.vue",
      name: "Projects",
      component: Projects
    },
    {
      path: "/TestingGrounds.vue",
      name: "Testing Grounds",
      component: TestingGrounds
    }
  ]
});
