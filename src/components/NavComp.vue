<template>
  <nav class="nav bg-dblue p-8 rounded-b-lg relative">
    <router-link
      v-for="button in buttons"
      :to="button.to"
      @click="changeIndicator($event.target)"
      :class="{ active: button.id == 0 }"
      class="navbutton"
      :key="button.id"
      ref="buttons"
      >{{ button.value }}</router-link
    >
    <div
      class="indicator border-b-2 border-b-white absolute top-8 w-16 h-7 mx-4 transition-all"
    ></div>
  </nav>
</template>

<style lang="postcss">
.navbutton {
  @apply !text-white mx-4 pb-1 w-16 inline-block text-center;
}
.navbutton.active {
  @apply font-bold;
}
.nav a:nth-child(1).active ~ .indicator {
  transform: translateX(calc(64px * 0));
}
.nav a:nth-child(2).active ~ .indicator {
  transform: translateX(calc((64px + 32px) * 1));
}
.nav a:nth-child(3).active ~ .indicator {
  transform: translateX(calc((64px + 32px) * 2));
}
.nav a:nth-child(4).active ~ .indicator {
  transform: translateX(calc((64px + 32px) * 3));
}
</style>

<script>
export default {
  name: "NavComp",
  data() {
    return {
      buttons: [
        {
          id: 0,
          value: "Persons",
          to: "/",
        },
        {
          id: 1,
          value: "Ships",
          to: "/",
        },
        {
          id: 2,
          value: "Planets",
          to: "/",
        },
        {
          id: 3,
          value: "Films",
          to: "/",
        },
      ],
    };
  },
  methods: {
    changeIndicator(target) {
      this.$refs.buttons.forEach((item) => {
        item.$el.classList.remove("active");
        target.classList.add("active");
      });
    },
  },
};
</script>
