require("dotenv").config();

const app = require("./src/app");

const port = process.env.REACT_PORT;

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
