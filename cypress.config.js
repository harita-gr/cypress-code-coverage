const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Your React app's local URL
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
     return config
    },
  },
});
