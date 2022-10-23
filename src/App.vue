<template>
  <NavComp></NavComp>
  <router-view />
</template>

<script>
import NavComp from "./components/NavComp.vue";

export default {
  name: "App",
  components: {
    NavComp,
  },
};
</script>
