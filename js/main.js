var inputtodo = document.getElementById('Inputbox');
var add = document.getElementById('add');
var upd = document.getElementById('upd');
var formCheck = document.querySelector("#form-check")
var Container = [];
if (localStorage.getItem("lists") == null) {
   Container = [];    
} else {
    Container = JSON.parse(localStorage.getItem("lists"))
    display()
}
function addTask(){
    Container.push({name:inputtodo.value,checked:false})
    localStorage.setItem("lists", JSON.stringify(Container))

    ClearInput();
    display();

}
function ClearInput(){
    inputtodo.value = '';
}
display();
function display(){
    var listTasks = ``;   
    if(Container.length==0)
    formCheck.innerHTML = `<img src=Master-Task-List.png></img>`
    else{for (let i = 0; i < Container.length; i++) {
        listTasks += `
        <div class="col-lg-8 mb-2">
                            <div class="w-100 text-start ps-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${i}" onclick="Save(${i})" ${Container[i].checked == false ? "" : "checked"}>
                                <label class="form-check-label" for="flexCheckDefault${i}">
                                    ${Container[i].name}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-2 text-end pe-4">
                            <button class="btn p-1 d-inline-block" onclick="Delete(${i})"> Delete </button>
                            <button class="btn p-1" onclick="Edit(${i})"> Edit </button>
                        </div>
                    `
    }
    formCheck.innerHTML = listTasks}
}
function clearAll(){
    Container.splice(0);
    localStorage.setItem("lists", JSON.stringify(Container))

    display();
}
function Delete(i){
    Container.splice(i, 1)
    localStorage.setItem("lists", JSON.stringify(Container))

    display();
}
var lastInd;
function Edit(i){
    lastInd = i;
    inputtodo.value=Container[i].name
    add.classList.add('d-none')
    upd.classList.remove('d-none')
    upd.classList.add('d-block')
    localStorage.setItem("lists", JSON.stringify(Container))
    

}
function Update(){
    Container[lastInd].name = inputtodo.value
    upd.classList.add('d-none')
    add.classList.remove('d-none')
    add.classList.add('d-block')
display();
}
function Save(i){
    if(Container[i].checked == false)
        Container[i].checked = true
    else
        Container[i].checked = false
        localStorage.setItem("lists", JSON.stringify(Container))
    }
function disPending(){
    var listTasks = ``;   
    if(Container.length==0)
    formCheck.innerHTML = `<img src=Master-Task-List.png></img>`
    else{for (let i = 0; i < Container.length; i++) {
        if(Container[i].checked == false){
        listTasks += `
        <div class="col-lg-8 mb-2">
                            <div class="w-100 text-start ps-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${i}" onclick="Save(${i})" ${Container[i].checked == false ? "" : "checked"}>
                                <label class="form-check-label" for="flexCheckDefault${i}">
                                    ${Container[i].name}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-2 text-end pe-4">
                            <button class="btn p-1 d-inline-block" onclick="Delete(${i})"> Delete </button>
                            <button class="btn p-1" onclick="Edit(${i})"> Edit </button>
                        </div>
                    `}
    }
    formCheck.innerHTML = listTasks}
}
function disCompleted(){
    var listTasks = ``;   
    if(Container.length==0)
    formCheck.innerHTML = `<img src=Master-Task-List.png></img>`
    else{for (let i = 0; i < Container.length; i++) {
        if(Container[i].checked == true){
            listTasks += `
        <div class="col-lg-8 mb-2">
                            <div class="w-100 text-start ps-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${i}" onclick="Save(${i})" ${Container[i].checked == false ? "" : "checked"}>
                                <label class="form-check-label" for="flexCheckDefault${i}" onclick="Save(${i})" >
                                    ${Container[i].name}
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-2 text-end pe-4">
                            <button class="btn p-1 d-inline-block" onclick="Delete(${i})"> Delete </button>
                            <button class="btn p-1" onclick="Edit(${i})"> Edit </button>
                        </div>
                    `
    }
}
    formCheck.innerHTML = listTasks
}
}