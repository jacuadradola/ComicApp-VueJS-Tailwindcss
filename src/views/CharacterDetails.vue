<template>
  <router-link
    :to="{ name: 'Characters' }"
    class="text-secondary-900 hover:text-primary-500"
  >
    <span class="material-icons icon-responsive">navigate_before</span>
  </router-link>
  <div class="md:flex rounded-xl p-8 md:p-0">
    <img
      class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
      :src="character.image"
    />
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-medium text-primary-900">
          “¡Hola! soy
          <span class="text-span">{{ character.name }}</span
          >, mi origen es
          <span class="text-span">{{ character.origin.name }}</span
          >, el género que afortunadamente me dieron
          <span class="text-span">{{ character.gender }}</span
          >, soy de la especie
          <span class="text-span">{{ character.species }}</span> y de estado
          <span class="">{{ character.status }}</span
          >”
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <span class="text-primary-900">Creado: </span>
        <span class="text-secondary-700">{{
          currentDateTime(character.created)
        }}</span>
        <div class="text-primary-400 text-right">Comentarios: 3</div>
      </figcaption>
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/api.service";
import moment from "moment";

export default {
  data() {
    return {
      character: {
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin: [],
        location: [],
        image: "",
        episode: [],
        created: "",
      },
    };
  },
  methods: {
    async getResources() {
      const data = {
        method: "get",
        url: "/character/" + this.$route.params.id,
      };

      await ApiService.customRequest(data)
        .then((response) => {
          let dataT = response.data;
          this.character = dataT;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    currentDateTime() {
      return moment().format("MMMM Do YYYY, h:mm:ss a");
    },
  },
  created() {
    this.getResources();
  },
};
</script>
