<template>
  <Banner :text="title" />

  <div class="grid grid-rows-2 grid-cols-2">
    <div class="transform -rotate-6">
      <img src="https://rickandmortyapi.com/api/character/avatar/691.jpeg" />
    </div>
    <div class="transform translate-y-16 translate-x-6">
      <img src="https://rickandmortyapi.com/api/character/avatar/671.jpeg" />
    </div>
    <div class="transform translate-y-2 translate-x-8">
      <img src="https://rickandmortyapi.com/api/character/avatar/778.jpeg" />
    </div>
    <div class="transform -rotate-6 translate-x-12">
      <img src="https://rickandmortyapi.com/api/character/avatar/783.jpeg" />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  name: "Episodes",
  props: ["route"],
  components: {
    Banner,
  },
  data() {
    return {
      title: "Episodes",
    };
  },
};
</script>
