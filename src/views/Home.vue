<template>
  <div class="grid-rows-3 space-y-5">
    <div class="card-home">
      <a href="/character" class="text-card-home"> {{url_resources.characters}} </a>
    </div>
    <div class="card-home">
      <a href="/location" class="text-card-home"> {{url_resources.locations}} </a>
    </div>
    <div class="card-home">
      <a href="/episode" class="text-card-home"> {{url_resources.episodes}} </a>
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/api.service";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      url_resources: {
        characters: "",
        locations: "",
        episodes: "",
      },
    };
  },

  methods: {
    async getResources() {
      const data = {
        method: "get",
        url: "/",
      };

      await ApiService.customRequest(data)
        .then((response) => {
          this.url_resources = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getResources();
  },
};
</script>
