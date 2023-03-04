const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server up and running on PORT ${PORT} ...`);
  console.log(`Server started on https://localhost:${PORT}`);
});
