<template>
  <div class="flex flex-col items-center">
    <div class="p-8 grid grid-cols-4 gap-4">
      <ButtonComp
        v-for="people in allPeople"
        :name="people.result.properties.name"
        :description="people.result.description"
        :key="people.result.uid"
        :image="getImage(people.result.uid)"
        :url="people.result.properties.url"
        :id="people.result.uid"
        ref="buttons"
      ></ButtonComp>
    </div>
    <vue-awesome-paginate :total-items="82" :on-click="changePage" />
  </div>
</template>

<style lang="postcss">
.pagination-container {
  @apply flex gap-x-3;
}
.paginate-buttons {
  @apply p-4 rounded-md bg-mblue text-white;
}
.paginate-buttons:hover {
  @apply bg-skyblue;
}
.active-page {
  @apply bg-dblue;
}
.active-page:hover {
  @apply bg-dblue cursor-default;
}
</style>

<script>
// @ is an alias to /src
import axios from "axios";
import ButtonComp from "@/components/ButtonComp.vue";

const API = "https://www.swapi.tech/api/";
const IMG_API =
  "https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json";
let page = 1;

export default {
  name: "PeopleView",
  components: {
    ButtonComp,
  },
  data() {
    return {
      data: null,
      allPeople: [],
      img: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getImage(id) {
      let obj = this.img.find((o) => o.id == id);
      return obj.image;
    },
    changePage(newPage) {
      page = newPage;
      this.allPeople = [];
      this.getData();
    },
    getData() {
      axios
        .get(API + `people?page=${page}&limit=10`)
        .then((response) => {
          if (response.status == 200) {
            this.data = response.data;
          }
        })
        .then(() => {
          axios.get(IMG_API).then((response) => {
            this.img = response.data;
          });
          this.data.results.forEach((element) => {
            axios
              .get(element.url)
              .then((resp) => {
                this.allPeople.push(resp.data);
              })
              .then(() => {
                let sort = this.allPeople.slice(0);
                sort.sort(function (a, b) {
                  return a.result.uid - b.result.uid;
                });
                this.allPeople = sort;
              });
          });
        });
    },
  },
};
</script>
