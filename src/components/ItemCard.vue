<template>
  <div class="item-card">
    <br>
    <h2 class="item-name">{{item_name}}</h2>
    <img class="item-image" :src=item_image_adress>
    <br>
    <h3 class="description-title">Description</h3>
    <p class="description-text">{{item_description}}</p>

  </div>

</template>

<script>

export default {
  name: 'ItemCard',
  props:{
    "item_name":String,
    "item_image_adress":String,
    "item_description":String,
    "actual_item_description":String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin-left: 1vw;
  font-size: x-large;
  width: 30vw;
  text-align: left;
}


.item-name{
  width: 20vw;
  text-align: center;
  font-size: 1.8vw;
}
.description-title{
  text-align: left;
  margin-left: 1vw;
  text-decoration: underline;
  font-size: 1.5vw;
}

.description-text{
  text-align: left;
  margin-left: 2vw;
  margin-right: 2vw;
  font-size: 1vw;
}

.item-card{
  position: center;
  border: solid;
  width: 25vw;
  height: 35vw;
  margin: 2vw;
  margin-bottom: 5vw;
  background-color: brown;
  border-radius: 2vw;

}

.item-image{
  width: 10vw;
}
</style>
