let myLeads = ["www.awesomelead.com", "www.anotherlead.com", "www.thirdlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
}

   


























// function saveLead(){
//     console.log("Button clicked from onclick attribute")
// }

// let inputBtn = document.getElementById("input-btn");

// inputBtn.addEventListener("click", function(){
//     console.log("Button clicked from addEventListener");
// })