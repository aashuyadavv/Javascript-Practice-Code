let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
            </a>
        </li>
    ` 
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