const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl":'https://pushing-front.vercel.app/', // para usar la misma url para todo el test
    watchForFileChanges: false, // para que no se actualice cada vez que cambio algo
  },
});
