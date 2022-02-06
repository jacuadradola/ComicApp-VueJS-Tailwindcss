<template>
  <div id="v-model-select">
    <select
      v-model="selected"
      class="form-select mt-1 block w-full border p-3 rounded text-secondary-900 bg-secondary-50"
    >
      <option v-for="option in options" :key="option.key" :value="option.key" class="text-secondary-900">
        {{ option.value }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "TidySelect",
  props: [],
  data() {
    return {
      selected: 0,
      options: [
        {
          key: 0,
          value: "Sin ordenar...",
        },
        {
          key: 1,
          value: "A - Z",
        },
        {
          key: 2,
          value: "Z - A",
        },
      ],
    };
  },
  updated() {
    let shorBy = this.selected;
    this.$emit("getShortBy", shorBy);
  },
};
</script>
