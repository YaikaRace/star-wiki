<template>
  <div>
    <img :src="image" alt="Character picture">
    <h1>{{ personData.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "PersonView",
  props: {
    url: {
      type: String,
      default: "https://www.swapi.tech/api/people/1",
    },
    image: {
      type: String,
      default: "https://placekitten.com/240/360",
    },
  },
  data(){
      return{
          personData: {}
        }
    }
};
</script>
