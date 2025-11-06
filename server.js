import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set EJS and layouts
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "./layouts/main"); // main.ejs inside /views/layouts

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home - CSE Motors" });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
