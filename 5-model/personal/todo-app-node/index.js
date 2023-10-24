import express from "express";
import appRoutes from "./routes/index.js";
import { dbInit } from "./database/index.js";

const app = express();
const port = 8080;

dbInit();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(appRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});