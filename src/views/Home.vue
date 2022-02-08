<template>
  <div v-if="url_resources != '' && !loading" class="grid-rows-3 space-y-5">
    <div class="card-home">
      <router-link :to="{ name: 'Characters' }" class="text-card-home">
        {{ url_resources.characters }}
      </router-link>
    </div>
    <div class="card-home">
      <router-link :to="{ name: 'Locations' }" class="text-card-home">
        {{ url_resources.locations }}
      </router-link>
    </div>
    <div class="card-home">
      <router-link :to="{ name: 'Episodes' }" class="text-card-home">
        {{ url_resources.episodes }}
      </router-link>
    </div>
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
import ApiService from "@/services/api.service";
import Loading from "@/components/Loading";

export default {
  name: "Home",
  components: {
    Loading,
  },
  data() {
    return {
      loading: true,
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
          setTimeout(() => {
            this.loading = false;
          }, 1000);
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
