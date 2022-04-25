<template>
  <v-btn
    variant="outlined"
    class="mode ma-2 pa-8"
    @click="click"
    :block="display.mobile.value"
  >
    {{ mode }}
  </v-btn>
</template>
<script>
import { useDisplay } from "vuetify";
export default {
  name: "ModeButton",
  setup() {
    const display = useDisplay();

    return { display };
  },
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
.mode {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 17px;
  letter-spacing: 2px;
  color: var(--main-color);
}
</style>
