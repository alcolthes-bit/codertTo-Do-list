const inputbox=document.getElementById('input-box')
const listcont = document.getElementById('list-container')
console.log(listcont);

function addTask(){
    if (inputbox.value === '') {
        alert("ENTER SOMETHINg")
        
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcont.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span)
    }
    inputbox.value=" ";
    dataStore();
    
}

listcont.addEventListener('click', (e)=>{
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');  
        dataStore();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        dataStore()

    }

},false)

function dataStore() {
    localStorage.setItem("data", listcont.innerHTML)
}

function calldata() {
    listcont.innerHTML= localStorage.getItem("data")
}

calldata()