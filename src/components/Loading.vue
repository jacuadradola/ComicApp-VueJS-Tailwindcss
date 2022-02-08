<template>
  <main class="flex flex-col align-center justify-center text-center">
    <div class="text-secondary-900 text-3xl mt-10 mb-6">
      Cargando información
    </div>
    <img :src="loadingImage" class="w-24 m-auto" />
  </main>
</template>
<script>
export default {
  data() {
    return {
      loadingImage: require("../assets/loading.gif"),
    };
  },
};
</script>
