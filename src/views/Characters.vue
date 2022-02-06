<template>
  <Banner :text="title" :prev="prev" :next="next" @getEvent="getEvent" />
  <Character :dataResult="dataResult" />
</template>

<script>
import ApiService from "@/services/api.service";

/* Import components */
import Banner from "@/components/Banner";
import Character from "@/components/Character";

export default {
  name: "Pagination",
  data() {
    return {
      title: "Characters",
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
    Character,
    Banner,
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
