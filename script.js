let modeBtn = document.querySelector("#modebtn")
let body = document.querySelector("body")
let currMode = "light"
modeBtn.addEventListener("click",()=>{
    if (currMode === "light"){
        currMode = "dark"
        body.classList.add("dark")
            
        
    }
})

