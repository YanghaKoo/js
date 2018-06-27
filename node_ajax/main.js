const express = require("express");
const app = express();
const bp = require("body-parser")

const items = [
  {
    name: "우유",
    price: "2000"
  },
  {
    name: "홍차",
    price: "5000"
  },
  {
    name: "커피",
    price: "5000"
  }
];

app.use(express.static("public"));
app.use(bp.urlencoded({ extended : false}))


// 모두가져오기를 위함
app.get("/drink",(req,res)=>{
    console.log(req.query)
    res.send(items)
})

// 추가를 위함
app.post("/drink",(req,res)=>{
    
    items.push({
        name : req.body.name,
        price : req.body.price
    })
    console.log(req.body)
    res.send(items[items.length-1]) 
})


// 하나 가져오기를 위함
app.get("/drink/:id",(req,res)=>{
    const id = Number(req.params.id)
    res.send(items[id])
})


// 수정을 위함
app.put("/drink/:id",(req,res)=>{
    const id = Number(req.params.id)
    items[id].name = "테스"
    items[id].price = 1000
    res.send("수정완료")
})


// 삭제를 위함
app.delete("/drink/:id",(req,res)=>{
    const id = Number(req.params.id)
    items.splice(id,1)
    res.send("Success")
})




app.listen(3000, () => {
  console.log("Connected 3000 port!");
});
