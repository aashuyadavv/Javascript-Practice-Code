import { contacts } from "./contactdata.js"

console.log(contacts)


const patternSearchInput = document.getElementById("pattern-Search-Input")
const patternSearchSubmit = document.getElementById("pattern-Search-Submit")
const contactDisplay = document.getElementById("contact-display")

patternSearchSubmit.addEventListener("click", function(){
    findMatchingContacts(contacts, patternSearchInput.value)
})

function findMatchingContacts(contacts, pattern) {
    contactDisplay.innerHTML = ''
  const regex = new RegExp(pattern, 'i')
  contacts.filter(function(contact) {
    return regex.test(contact.name)
  })
  .forEach(function(contact){
    renderContact(contact)
  })

}

function renderContact(contactObj) {
    const { name, email, phone, city} = (contactObj)
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    const nameElement = document.createElement('p')
    const emailElement = document.createElement('p')
    const phoneElement = document.createElement('p')
    const cityElement = document.createElement('p')
    nameElement.innerText = name
    emailElement.innerText = email
    phoneElement.innerText = phone
    cityElement.innerText = city
    contactCard.appendChild(nameElement)
    contactCard.appendChild(emailElement)
    contactCard.appendChild(phoneElement)
    contactCard.appendChild(cityElement)
    contactDisplay.appendChild(contactCard)
}