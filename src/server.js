require("dotenv").config();

const app = require("./app.js");
const PORT = process.env.PORT;

// LISTENER
app.listen(PORT, () => {
  console.log(`
    =====================================

     L I S T E N  T O  P O R T ${PORT}

    =====================================
  `);
}).on('error', (err) => {
  console.error(`Error starting server: ${err.message}`);
});
