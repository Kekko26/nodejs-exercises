const createApp = require("./app.mjs")

const app = createApp()

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
  });