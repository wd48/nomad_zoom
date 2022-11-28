import express from "express";
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.set("view engine","pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname+"/public"));
// public 폴더를 사용자에게 제공해줌
app.get("/", (req,res) => res.render("home"));
app.get("*", (req, res) => res.redirect("/"));


const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen);