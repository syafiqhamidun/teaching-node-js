import express from "express";
import appRoutes from "./routes/index.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(appRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
