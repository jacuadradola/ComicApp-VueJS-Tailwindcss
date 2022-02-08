<template>
  <div
    v-for="character in dataResult"
    :key="character.id"
    class="p-2 card-home"
  >
    <div class="shadow-lg bg-primary-100 rounded">
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
            <!-- <div class="text-primary-400 text-right">Comentarios: 3</div> -->
          </figcaption>
          <div class="text-right hover:text-secondary-600">
            <router-link
              class="btn-1"
              :to="{
                name: 'CharacterDetails',
                params: { id: character.id },
              }"
              >Ver</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";

moment.locale("es");

export default {
  name: "Character",
  props: {
    dataResult: Object,
  },
  methods: {
    currentDateTime() {
      return moment().format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>
