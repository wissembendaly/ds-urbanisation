const express=require('express');
const router=express.Router();
const days=require('../../public/days.js');
const months=require('../../public/months.js');
const uuid=require('uuid');
var xml = require('xml');

  //gets members
  router.get('/dayOfWeek/:nbr',(req,res)=>{
    day=parseInt(req.params.nbr);

    if (day>=8){
      xmlResponse=xml({msg:`no day has index ${req.params.nbr}`})
      
    }
    else{
      var found = days.find(dayi=> dayi.id===day);
      console.log(day)
      console.log(found)
      var xmlResponse = xml({day : found.day});
      console.log(xmlResponse);
    }
    
    res.set('Content-Type', 'text/xml');
    res.send(xmlResponse);

})






router.get('/monthOfYear/:nbr',(req,res)=>{
  month=parseInt(req.params.nbr);
  if (month>=13){
    xmlResponse=xml({msg:`no month has index ${req.params.nbr}`})
    
  }
  else{
    var found = months.find(monthi=> monthi.id===month);
    console.log(month)
    console.log(found)
    var xmlResponse = xml({month : found.month});
    console.log(xmlResponse);
  }
  
  res.set('Content-Type', 'text/xml');
  res.send(xmlResponse);

})




module.exports=router;