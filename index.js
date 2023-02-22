import express from "express";
const app = express();
import fs from "fs";

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World! 😉");
});

app.get("/create", (request, response) => {
  var content = new Date().getTime().toLocaleString();
  //   console.log(content);
  // console.log(new Date().getDate());
  // console.log(new Date().getMonth()+1);
  // console.log(new Date().getFullYear());
  // console.log(new Date().getHours());
  // console.log(new Date().getMinutes());
  // console.log(new Date().getSeconds());

  var dateTime = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`;
  //   console.log(dateTime);
  fs.writeFile(`./Files/${dateTime}.txt`, content, (err) => {
    if (err) console.log(err);
    else console.log("success");
  });
  response.send("files created");
});

//Task-2 to retrieve the files from the Particular folder

app.get("/files",(request,response)=>{
    fs.readdir("./Files",(err,Files)=>{
        if(err)
            console.log(err)
        else
            response.json({Files})
    });
})

app.listen(port, () => {
  console.log(`The Server Started at the port :  ${port} 😀`);
});
