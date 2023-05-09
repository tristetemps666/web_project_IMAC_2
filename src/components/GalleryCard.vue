<template>
  <div class="gallery-card">
    <div v-for="item in item_data" :key="item.id">
      <ItemCard :item_name="item.name" 
      :item_image_adress="item.image"
      :item_description="item.description"/>
    </div>
    <br>
  </div>

</template>

<script>

import ItemCard from '../components/ItemCard.vue'
import {get_item_informations} from '../services/api/getdatas.js'

export default {
  name: 'GalleryCard',
  components:{
    ItemCard
  },
  
  data() {
    return {
      item_data: []
    }
  },

  created:
    function(){
      this.retrieve_item_data();
    },

  methods: {
    async retrieve_item_data(){
      this.item_data = await get_item_informations()
      console.log("blabla" + this.item_data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery-card{
  display:grid;
  grid-template-columns: 30vw 30vw 30vw;
  grid-template-rows: auto;
}
</style>
