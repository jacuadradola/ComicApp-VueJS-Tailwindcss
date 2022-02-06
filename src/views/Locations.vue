<template>
  <Banner :text="title" />

  <div class="grid grid-rows-2 grid-cols-2">
    <div class="transform -rotate-6">
      <img src="../assets/mountains-1.jpg" />
    </div>
    <div class="transform translate-y-16 translate-x-6">
      <img src="../assets/mountains-2.jpg" />
    </div>
    <div class="transform translate-y-2 translate-x-8">
      <img src="../assets/mountains-3.jpg" />
    </div>
    <div class="transform -rotate-6 translate-x-12">
      <img src="../assets/mountains-4.jpg" />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  name: "Locations",
  props: ["route"],
  components: {
    Banner,
  },
  data() {
    return {
      title: "Locations",
    };
  },
};
</script>
