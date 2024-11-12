letinput = document.getElementById("inputBox");
let buttons = document.querySelectorAll("buttons");

let string ="";
let arr =Array.from(buttons);
arr.forEach(button =>{
    button.addEventlistnear("click", (e) =>{
    if(e.traget.innerHTML == "="){
        string =eval(string); 
        Input.value =string; 
    }
    else if(e.traget.innerHTML == "AC"){
        string ="";
        Input.value =string;
    }

    else if(e.traget.innerHTML =="DEL"){
        string= string.substring(0, string, length)
        input.value=string;
    }

    
    else{
    string += e.traget.innerHTML;
    Inputvalue =string;
}
    })
})
    
