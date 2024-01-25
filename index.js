//const student = require("./student");
const http=require("http");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const taskControllers= require("./controller/taskController");

dotenv.config();

const app= express();
app.use(express.json());

app.post("/tasks",taskControllers.createTask);
app.get("/tasks",taskControllers.getTasks);
app.get("/tasks/:id",taskControllers.getTaskById);
app.patch("/tasks/:id",taskControllers.updateTask);
app.delete("/tasks/:id",taskControllers.deleteTask);

app.get("/:id", (req, res)=>{
    res.status(200).json({
        message: "hello",
        id: req.params.id
    });
});

app.post("/", (req, res)=>{
    res.status(200).json(req.body);
});

mongoose.connect("mongodb+srv://20cs379:20cs37929@cluster0.r85aq06.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
});

app.listen(process.env.PORT, () =>{
    console.log("Server running on ",process.env.PORT);
})

/*const server = http.createServer((req, res)=>{
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Hello World");
});

server.listen(process.env.PORT, () =>{
    console.log("Server is running on ",process.env.PORT)
});*/

//student.display();
//student.getDetails();
