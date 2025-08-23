const express=require('express');
const app=express();
app.use(express.json()); // Middleware to parse JSON bodies
app.post('/echo',(req,res)=>{
    res.json(req.body); // Echo back the received JSON
});
const PORT=3000;    
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
}   ); // Start server