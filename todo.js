console.log("TODO-APP 🔥")

let task = document.querySelector("#task");
let desc = document.querySelector("#desc");
let btn = document.getElementById("btn");
let box = document.querySelector("#box");
// console.log(box)

btn.addEventListener("click",function(){
    
    
    if(task.value==="" || desc.value===""){
        alert("Property is missing")
    }else{
        console.log("Got your task")
        show_tasks()
        task.value = ""
        desc.value = ""
        
    }


});

function show_tasks(){

    let element = document.createElement("div");
    let html = ""
    html+=`
    <div class="list-group-item mb-2">
    <label class="list-group pl-2" style="display: inline-block;">
        <input class="form-check-input me-1 p-2" type="checkbox">${task.value}
    </label>
    </div>`
    
    element.innerHTML = html 
    box.append(element)
};


