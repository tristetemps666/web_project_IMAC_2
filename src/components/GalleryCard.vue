<template>
  <label for="Search"> Search</label>
  <input
    name="Search"
    v-model="search"
    class="drop-down"
    type="text"
  />

  <select v-model="itemSortType" class="drop-down">
    <option value="AZname">A -> Z</option>
    <option value="ZAname">Z -> A</option>
  </select>

  <select v-model="category" class="drop-down">
    <option value="items">Items</option>
    <option value="ammos">Ammunitions</option>
    <option value="armors">Armors</option>
    <option value="ashes">Ashes of war</option>
    <option value="shields">Shields</option>
    <option value="weapons">Weapons</option>
    <option value="talismans">Talismans</option>
  </select>

  <label for="number of item"> Number of Items displayed</label>
  <input
    name="number of item"
    v-model="numberOfItem"
    class="drop-down"
    type="number"
  />

  <div class="gallery-card">
    <div v-for="item in itemOrganizedData" :key="item.id">
      <ItemCard
        :item_name="item.name"
        :item_image_adress="item.image"
        :item_description="item.description"
      />
    </div>
    <br />
  </div>
</template>

<script>
import ItemCard from "../components/ItemCard.vue";
import { get_item_informations } from "../services/api/getdatas.js";

export default {
  name: "GalleryCard",
  components: {
    ItemCard,
  },

  data() {
    return {
      item_data: [],
      search: "",
      itemSortType: sessionStorage.getItem("itemSortType") || "AZname",
      category: sessionStorage.getItem("category") || "items",
      numberOfItem: sessionStorage.getItem("numberOfItem") || 20,
    };
  },

  created: function () {
    this.retrieve_item_data();
  },

  computed: {
    itemOrganizedData: function () {
      const filterFunc = (a) =>
        a.name.toLowerCase().includes(this.search.toLowerCase());
      let organized_data = this.item_data.filter(filterFunc);

      const comparator_type =
        this.itemSortType == "AZname"
          ? (a, b) => a.name.localeCompare(b.name)
          : (a, b) => b.name.localeCompare(a.name);

      return organized_data.sort(comparator_type);
    },
  },
  methods: {
    async retrieve_item_data() {
      this.item_data = await get_item_informations(
        this.category,
        this.numberOfItem
      );
      console.log("blabla" + this.item_data);
    },
  },

  watch: {
    category() {
      this.retrieve_item_data();
      sessionStorage.setItem("category", this.category);
    },
    numberOfItem() {
      this.retrieve_item_data();
      sessionStorage.setItem("numberOfItem", this.numberOfItem);
    },
    itemSortType() {
      sessionStorage.setItem("itemSortType", this.itemSortType);
    },
    search(){
      sessionStorage.setItem("search", this.search);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery-card {
  display: grid;
  grid-template-columns: 30vw 30vw 30vw;
  grid-template-rows: auto;
  margin: 0 auto;
}

.drop-down {
  margin: 1vh 2vw;
}
</style>
