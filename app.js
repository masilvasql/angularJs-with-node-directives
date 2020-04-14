const express = require('express')
const cors = require('cors')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors())

app.use(express.static('public'))

const jsonArray = [
    {
        nome:'Marcelo Lindão',
        idade: 28,
        observacao:'e'
    },
    {
        nome:"DelFir",
        idade:26,
        observacao:'a'
    },
    {
        nome:"Joiceeeeeeeee",
        idade: 25,
        observacao:'b'
    },
    {
        nome:"Tiago sem H",
        idade:32,
        observacao:"f"
    },
    {
        nome:"Ermeso",
        idade:26,
        observacao:'c'
    },
    {
        nome:"Carol",
        idade: 24,
        observacao:"d"
    }
]

app.get("/listar", cors(),(req, res)=>{
    res.send(jsonArray)
})

app.listen(4201, ()=>{
    console.log("Rodando na porta 4201")
})