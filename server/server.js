const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./DB/index");
const express = require("express");
const cors = require("cors");
const app = express();
const newsUserRoute = require("./routes/userRouting");
const path = require("path");
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB.on("error", () => {
  console.log("error");
});

app.listen(PORT, (error) => {
  if (error) return "error";
  console.log("we're on air");
});

app.use("/api/user", newsUserRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}
