// const emojis = ['😀', '😂', '😍','😎'];
// console.log(emojis.includes('😎')); true
// console.log(emojis.includes('😊')); false

const addItemBtn = document.getElementById('add-Item-Btn')
const itemInput = document.getElementById('item-Input')
const list = document.getElementById('list')

const shoppingList = []

addItemBtn.addEventListener('click', function() {

    if(shoppingList.includes(itemInput.value)){
        console.log('no duplicates')
    }
    else{
    shoppingList.push(itemInput.value)
    render()
    }
    itemInput.value = ''
})

function render() {
    let html = ''
    for (let item of shoppingList){
        html += `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}

render()