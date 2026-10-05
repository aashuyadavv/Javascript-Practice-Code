let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // 2. call the renderLeads() function
    renderLeads()
})

// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        listItems += "<li>" + myLeads[i] + "</li>" 
    }
    ulEl.innerHTML = listItems
}















// function saveLead(){
//     console.log("Button clicked from onclick attribute")
// }

// let inputBtn = document.getElementById("input-btn");

// inputBtn.addEventListener("click", function(){
//     console.log("Button clicked from addEventListener");
// })