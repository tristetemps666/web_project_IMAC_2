<template>

  <select v-model="itemSortType">
    <option value="AZname">A -> Z</option>
    <option value="ZAname">Z -> A</option>
  </select>

  <div class="gallery-card">
    <div v-for="item in itemOrganizedData" :key="item.id">
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
      item_data: [],
      search: "",
      itemSortType : "AZname"
    }
  },

  created:
    function(){
      this.retrieve_item_data();
    },

  
  computed:{
    itemOrganizedData: function(){      
      const comparator_type =  this.itemSortType =="AZname" ? 
                                          (a,b)=>a.name.localeCompare(b.name):
                                          (a,b)=>b.name.localeCompare(a.name);

      let organized_data =this.item_data; 
      return organized_data.sort(comparator_type);
    }
  }
  ,

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
