<template>
  <AppHeader />
  <GalleryCard />
  <AppFooter />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import GalleryCard from "./components/GalleryCard.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    GalleryCard,
    AppFooter,
  },
};
</script>

<style>
@font-face {
  font-family: "Elden Font";
  src: url("assets/Mantinia Regular/Mantinia Regular.otf") format("opentype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ebe4b8;
}

a {
  font-family: "Elden Font";
  color: green;
}

html{
  scroll-behavior: smooth;
}

body {
  margin-bottom: 5vh;
  background-color: rgba(31, 34, 43, 255);
}
</style>
