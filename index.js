require("dotenv").config({ path: "./.env" });

const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: `http://localhost:3000`,
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/private", require("./src/routes/private"));

app.use("/api/public", require("./src/routes/public"));

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
