const express =require('express');
const path=require('path');
const logger=require('./middleware/logger')

const app=express();

//body parser middleware
app.use(express.json());//handle json
app.use(express.urlencoded({extended: false}));


//use middleware 
//app.use(logger);

//routes
app.use('/api',require('./routes/api/ds'))

const PORT=process.env.PORT || 5000;

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })





//app.use(express.static(path.join(__dirname,'public')))


app.listen(PORT,()=>{
console.log(`server running on ${PORT}`);
});
