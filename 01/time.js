const express=require("express");
const app=express();

app.get("/time",(req,res)=>{
  const currentTime = new Date().toISOString(); // Get current time in ISO format
  res.json({ time: currentTime }); // Respond with the current time
});
const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);
}       ); // Start server  