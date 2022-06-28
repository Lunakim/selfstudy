import express from "express";
const port = 8282;

const app = express();

app.set("view engine", "pug"); //pug로 view engine 설정
app.set("views", __dirname + "/views"); //express에 template 어디 있는지 지정
app.use("/public", express.static(__dirname + "/public")); //user가 /public에 가면 뒤에 폴더를 공유해준다.
app.get("/", (_,res) => res.render("home")); //home.pug를 렌더링하는 route handler를 만듦
//express: views 설정, render <-> 나머지는 wehsocket이 할 것 
app.get("/*", (_,res) => res.redirect("/"));

const handleListen = () => console.log('port ' + port +' is listening');

app.listen(port, handleListen)