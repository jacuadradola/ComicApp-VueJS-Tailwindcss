<template>
  <div class="grid grid-cols-3">
    <div>
      <a href="/" class="text-secondary-900 hover:text-primary-500">
        <span class="material-icons icon-responsive">home</span>
      </a>
    </div>
    <div class="font-bold text-center text-secondary-600">
      <h3>{{ text }}</h3>
    </div>
    <div class="flex space-x-4 mb-6 text-sm">
      <div class="flex-auto flex space-x-4"></div>
      <button
        v-if="next != 2 && next != null"
        class="flex-none flex items-center justify-center w-9 h-9 rounded-md border arrow"
        type="button"
        @click.prevent="getPage(prev)"
      >
        <span class="material-icons icon-responsive">navigate_before</span>
      </button>
      <button
        disabled
        class="flex-none flex items-center justify-center w-9 h-9 rounded-md"
      >
        <span
          v-if="next != null"
          class="text-2xl text-secondary-800 font-bold"
          >{{ next - 1 }}</span
        >
      </button>
      <button
        v-if="next != null"
        class="flex-none flex items-center justify-center w-9 h-9 rounded-md border arrow"
        type="button"
        @click.prevent="getPage(next)"
      >
        <span class="material-icons icon-responsive">navigate_next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
  props: ["text", "prev", "next"],
  methods: {
    getPage(getEvent) {
      this.$emit("getEvent", getEvent);
    },
  },
};
</script>
