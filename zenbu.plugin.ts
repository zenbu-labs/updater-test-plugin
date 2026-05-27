import { definePlugin } from "@zenbujs/core/config"

export default definePlugin({
  name: "updater-test-plugin",
  services: ["./src/main/services/*.ts"],
})
