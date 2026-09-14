import express from 'express'
import fs from 'fs';

const app=express()
const PORT=3000;
app.get('/',(req,rev)=>{
    Fs.readfile (:./index.html',(err,data)=>{
        
    if(err){
            res.status(500).send('error reading file');
            return ;

        }
        else{
            res.send(data);
        }
    }
});