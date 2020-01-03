<template>
  <div>
    <hr class="experience" data-content="my experience" />

    <div class="skills-container">
      <Skills v-for="(item, index) in data" :key="index" :item="item"></Skills>
    </div>
  </div>
</template>

<script>
import Skills from "@/components/Skills.vue";

export default {
  name: "SkillsContainer",
  components: {
    Skills
  },
  data() {
    return {
      data: [
        {
          name: "vue js",
          logo:
            "https://res.cloudinary.com/johnayeni/image/upload/v1524501994/vue-logo_uoxef2.png"
        },
        {
          name: "react js",
          logo:
            "https://res.cloudinary.com/johnayeni/image/upload/v1524501994/react-logo_n8nigl.png"
        },
        {
          name: "angular js",
          logo:
            "https://res.cloudinary.com/johnayeni/image/upload/v1524501990/angular-logo_wnra1m.png"
        },
        {
          name: "javascript",
          logo:
            "https://res.cloudinary.com/johnayeni/image/upload/v1524501992/javascript-logo_kz7zja.png"
        },
        {
          name: "html",
          logo:
            "https://res.cloudinary.com/johnayeni/image/upload/v1524501992/html-logo_oe7cb4.png"
        },
        {
          name: "css",
          logo:
            "https://res.cloudinary.com/johnayeni/image/upload/v1524501991/css-logo_hsgsej.png"
        },
        {
          name: "node js",
          logo:
            "https://res.cloudinary.com/johnayeni/image/upload/v1524501992/nodejs-logo_w8vt1c.png",
          stack: ["framework", "frontend", "backend", "web"]
        },
        {
          name: "mySQL",
          logo: "https://unpkg.com/simple-icons@latest/icons/mysql.svg",
          stack: ["database"]
        },
        {
          name: "mongo DB",
          logo: "https://unpkg.com/simple-icons@1.18.0/icons/mongodb.svg",
          stack: ["database"]
        },
        {
          name: "git",
          logo: "https://unpkg.com/simple-icons@latest/icons/git.svg",
          stack: ["version control"]
        },
        {
          name: "photoshop",
          logo:
            "https://unpkg.com/simple-icons@latest/icons/adobephotoshop.svg",
          stack: ["design"]
        },
        {
          name: "indesign",
          logo: "https://unpkg.com/simple-icons@latest/icons/adobeindesign.svg",
          stack: ["design"]
        },
        {
          name: "microsoft office",
          logo: "https://unpkg.com/simple-icons@latest/icons/microsoft.svg",
          stack: ["productivity"]
        },
        {
          name: "atom",
          logo: "https://unpkg.com/simple-icons@latest/icons/atom.svg",
          stack: ["ide"]
        }
      ]
    };
  }
};
</script>


<style scoped>
@import "https://fonts.googleapis.com/css?family=Oswald&display=swap";

.skills-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 5px;
  align-items: center;
  justify-content: center;
}

hr.experience {
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
hr.experience:before {
  content: "";
  background: linear-gradient(to right, transparent, #000000, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2px;
}
hr.experience:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: black;
  padding: 0 0.5em;
  line-height: 1.5em;
  color: #000000;
  background-color: #f5f1e7;
}

@media screen and (max-width: 800px) {
  .skills-container {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>