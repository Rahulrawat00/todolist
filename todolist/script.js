const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const AddBtn = document.getElementById('addbtn')
AddBtn.addEventListener('click',function(){
if(inputBox.value ===""){
    alert('you must add some task')
}
else{
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = "\u00d7"
    li.appendChild(span)
}     

inputBox.value =''
saveData()
})
listContainer.addEventListener('click',function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle("checked")
        saveData()

    }
    else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove()
        saveData()
    }

},false)
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}
function task(){
    listContainer.innerHTML = localStorage.getItem('data')
}
task()