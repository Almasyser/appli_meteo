
const dotenv = require("dotenv");
dotenv.config();

const app = require("./src/app");

const port = process.env.REACT_APP_PORT || 5050;

app.listen(port, (err) => {
  if (err) {
    console.error("Serveur inaccessible");
  } else {
    console.log(`Le serveur écoute sur le port: ${port}`);
  }
});
