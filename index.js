const express = require("express");
require('dotenv').config();

const route = require("./routes/client/index.route");

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");
// Đi vào thư mục public chứa các file tỉnh
app.use(express.static("public"));

route(app);

 app.listen(port, () => {
    console.log(`App listening on port ${port}`);
 });