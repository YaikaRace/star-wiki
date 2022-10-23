<template>
  <div class="p-8">
    <keep-alive>
      <Suspense>
        <ButtonComp
          v-for="people in allPeople"
          :name="people.result.description"
          :description="people.result.description"
          :key="people.result.uid"
        ></ButtonComp>
      </Suspense>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import ButtonComp from "@/components/ButtonComp.vue";

const API = "https://www.swapi.tech/api/";

export default {
  name: "PeopleView",
  components: {
    ButtonComp,
  },
  data() {
    return {
      data: null,
      allPeople: null,
    };
  },
  beforeCreate() {
    axios.get(API + "people").then((response) => {
      if (response.status == 200) {
        this.data = response.data;
        console.log(this.data);
        this.data.results.forEach((element) => {
          axios.get(element.url).then((resp) => (this.allPeople = resp.data));
        });
      }
    });
  },
};
</script>
