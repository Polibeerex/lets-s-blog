import express from "express";
import ejs from "ejs";

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",(req,res)=>{
  res.render("index");
})

app.get("/compose",(req,res)=>{
  res.render("compose");
})

app.listen(port,()=>{
  console.log(`Server is running on ${port}`)
})