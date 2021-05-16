const express=require('express');
const app=express()
const port=5000
app.get('/',function(request,response){

console.log("Request Arrived");
response.send("I am Great");
});

app.listen(port,function(error){
if(error)
{
console.log("Some issue");
}else
{
console.log("Server is up and ready to accept request at 5050");
}

});