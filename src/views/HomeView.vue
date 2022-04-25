<template>
  <div class="home">
    <div style="height: 32px" />
    <div class="d-flex flex-column justify-space-between align-center">
      <v-img width="300" src="../assets/logo.svg" cover></v-img>
    </div>
    <div style="height: 32px" />
    <h3>Select one communication mode:</h3>
    <div style="height: 16px" />
    <mode-button v-for="mode in modes" :key="mode" :mode="mode" />
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