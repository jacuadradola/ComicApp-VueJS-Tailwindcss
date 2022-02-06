<template>
  <Banner :text="title" :prev="prev" :next="next" @getEvent="getEvent" />
  <main v-if="dataResult.length > 0 && !loading">
    <TidySelect @getShortBy="getOrderBySelect" />
    <Character :dataResult="dataResult" />
  </main>
  <main v-else class="flex flex-col align-center justify-center text-center">
    <div class="text-secondary-900 text-3xl mt-10 mb-6">
      Cargando información
    </div>
    <img :src="loadingImage" class="w-24 m-auto" />
  </main>
</template>

<script>
import ApiService from "@/services/api.service";

/* Import components */
import Banner from "@/components/Banner";
import Character from "@/components/Character";
import TidySelect from "@/components/TidySelect";

export default {
  name: "Pagination",
  data() {
    return {
      title: "Characters",
      order: "",
      loading: true,
      loadingImage: require("../assets/loading.gif"),
      pages: true,
      count: null,
      allPages: null,
      currentPage: "",
      next: "",
      prev: "",
      dataResult: [],
      range: [],
    };
  },
  components: {
    Banner,
    TidySelect,
    Character,
  },
  methods: {
    async getResources() {
      const data = {
        method: "get",
        url: "/character",
      };

      await ApiService.customRequest(data)
        .then((response) => {
          let dataT = response.data;
          this.assignData(dataT);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    assignData(data) {
      let temp = data.info;
      this.count = temp.count;
      this.allPages = temp.pages;
      let str_1 = temp.prev;
      if (str_1 != null) {
        let array = str_1.split("=", 2);
        this.prev = array[1];
      }
      let str_2 = temp.next;
      if (str_2 != null) {
        let array = str_2.split("=", 2);
        this.next = array[1];
      }
      this.dataResult = data.results;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    async getEvent(page) {
      const data = {
        method: "get",
        url: "/character/?page=" + page,
      };

      await ApiService.customRequest(data)
        .then((response) => {
          let dataT = response.data;
          this.assignData(dataT);
          this.getOrderBySelect(this.order);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getOrderBySelect(sortBy) {
      this.order = sortBy;
      const dataTemp = this.dataResult;
      if (sortBy == 0) {
        this.dataResult = dataTemp.sort((a, b) => (a.id < b.id ? -1 : 1));
      }
      if (sortBy == 1) {
        this.dataResult = dataTemp.sort((a, b) => (a.name < b.name ? -1 : 1));
      }
      if (sortBy == 2) {
        this.dataResult = dataTemp.sort((a, b) => (a.name > b.name ? -1 : 1));
      }
    },
  },
  created() {
    this.getResources();
  },
};
</script>
