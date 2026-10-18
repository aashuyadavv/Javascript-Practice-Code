const characters = [
    {
        title: 'Aashish',
        emoji: '🧑🏽‍💻',
        powers: ['coding', 'debugging', 'problem-solving'],
    },
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Samurai',
        emoji: '🗡️',
        powers: ['honor', 'loyalty', 'courage'],
    },
    {
        title: 'Wizard',
        emoji: '🧙',
        powers: ['magic', 'spellcasting', 'enchanting'],
    }
]

characters.forEach(function(character, index){
        console.log(index, character.title)
    })

// use .forEach() if u don't need to create a new array. 


    // character.powers.forEach(function(power){
    //     console.log(power)
// })