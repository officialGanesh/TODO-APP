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
        delete_todo()
}});

function show_tasks(){

    let element = document.createElement("div");
    let html = "";
    html+=`
    <div class="card text-white bg-dark mb-3 mt-4 mx-3 my-4" style="width: 10rem; text-align:center; border-radius:15;">
    <div class="card-header">${task.value}</div>
    <div class="card-body">
        <p class="card-text">${desc.value}</p> 
    </div>
    <button type="button" class="btn btn-danger completed" style="margin:1rem;">Finish</button>
    </div>`
    
    element.innerHTML = html 
    box.append(element);

};

function delete_todo(){

    let all_delete_buttons = document.getElementsByClassName("completed");
    // console.log(all_delete_buttons)
    Array.from(all_delete_buttons).forEach(function(e){

        e.addEventListener("click",function(){
        
            e.setAttribute('style',"margin:1rem; background-color:green; color:white; text-align:center; padding:3px; border-radius:3px;")
            e.setAttribute('class',"disabled")
            e.innerHTML = "Task Completed"

        })
    })
    
    
};




