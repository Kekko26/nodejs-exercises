import figlet from "figlet"

figlet("Develhope", (err, data)=>{
    if(err){
        console.log("An error has occurred");
        return
    }
    console.log(data);
})