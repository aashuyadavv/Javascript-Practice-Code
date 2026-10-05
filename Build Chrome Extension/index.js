let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

    console.log( localStorage.getItem("myLeads") )

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
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.lead2.com")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)
// localStorage.clear()