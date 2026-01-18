const express = require("express") 
const app = express()

const path =  require("path")
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")))

let posts = [
    {
        username : "Virat Kohli",
        content : "I am No 1 ODI Batter"
    },
    {
        username: "Rohit Sharma",
        content : "I am No 3 ODI batter"
    },
    {
        username : "Daryl Mitchel",
        content : "I am No 2 ODI Batter"
    }
]

app.get("/posts" , (req,res)=>{
    res.render("./index.ejs" , {posts})
})
app.listen(8000, ()=>{
    console.log("App is Listening to port 8000")
})