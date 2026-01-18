const express = require("express") 
const app = express()

const path =  require("path")
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.get("/posts/new" , (req,res)=>{
    res.render("./new.ejs")
})

app.post("/posts" , (req,res)=>{
    
    let {username, content} = req.body
    posts.push({username,content})
    res.send("Post is Accepted..." )
})





app.listen(8000, ()=>{
    console.log("App is Listening to port 8000")
})