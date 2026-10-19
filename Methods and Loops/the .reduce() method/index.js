const rainJanuaryByWeek = [ 10, 20, 0, 122 ]

const totalRainfallJanuary = rainJanuaryByWeek.reduce(function(total, currentElement){
    console.log('Total:', total, 'Current Element:', currentElement)
    return total + currentElement
})

console.log(totalRainfallJanuary)


// Total: 10 Current Element: 20
// Total: 30 Current Element: 0
// Total: 30 Current Element: 122
// 152