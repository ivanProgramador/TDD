const express = require("express");
const app = express();

app.get('/',(req,res)=>{

    res.json({success:true});
});

app.get('/cor/:pessoa',(req,res)=>{

    let pessoa = req.params.pessoa;

    if(pessoa == "victor"){
        res.json({cor:"Vermelho"});
    }
})

module.exports = app;


