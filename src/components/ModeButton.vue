<template>
  <button @click="click">
    {{ mode }}
  </button>
</template>
<script>
export default {
  name: "ModeButton",
  props: {
    mode: { type: String, required: true },
  },
  methods: {
    click() {
      this.$router.push({ name: this.mode });
    },
  },
};
</script>

<style scoped>
button {
  text-transform: uppercase;
}
</style>
