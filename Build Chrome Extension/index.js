let myLeads = ["www.awesomelead.com", "www.anotherlead.com", "www.thirdlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

   
for (let i = 0; i < myLeads.length; i++){
    // ulEl.textContent += "<li>" + myLeads[i] + "</li>"
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}














// function saveLead(){
//     console.log("Button clicked from onclick attribute")
// }

// let inputBtn = document.getElementById("input-btn");

// inputBtn.addEventListener("click", function(){
//     console.log("Button clicked from addEventListener");
// })