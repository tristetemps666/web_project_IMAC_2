<template>
    <GalleryCard/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import GalleryCard from './components/GalleryCard.vue'

export default {
  name: 'App',
  components: {
    GalleryCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff8800;
  margin-top: 60px;
}
</style>
