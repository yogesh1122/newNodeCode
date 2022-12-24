const PORT = process.env.PORT || 4000;

module.exports=(app)=>{

app.listen(PORT, ()=>{
    console.log(`server listing on ${PORT}`);
})

}