import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from './routes/user.routes.js';
import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

const app = express();

//set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
//Use the routes specified in the routes file
app.use('/', router);

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});