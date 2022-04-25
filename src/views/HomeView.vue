<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg" />
    <h4>Select one communication mode:</h4>
    <ul>
      <li v-for="mode in modes" :key="mode"><mode-button :mode="mode" /></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import ModeButton from "@/components/ModeButton.vue";

export default {
  name: "HomeView",
  components: { ModeButton },
  data() {
    return { modes: ["tcp", "udp", "bth", "usb", "ble"] };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>