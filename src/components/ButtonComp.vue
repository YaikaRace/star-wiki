<template>
  <button
    class="text-left p-4 bg-dblue rounded-md hover:bg-dblue/30 duration-300"
  >
    <img :src="image" alt="thumbnail" class="rounded-sm" />
    <h2 class="text-xl text-white mt-6">{{ name }}</h2>
    <p class="text-white/50">{{ description }}</p>
  </button>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {
    name: {
      type: String,
      default: "Default name",
    },
    description: {
      type: String,
      default: "Default Description",
    },
    image: {
      type: String,
      default: "https://placekitten.com/332/225",
    },
  },
};
</script>
