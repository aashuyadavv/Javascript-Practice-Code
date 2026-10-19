const dailyStepsArr = [1000, 1200, 1800, 1500, 1100, 1900, 1300]

const areAllOver10k = dailyStepsArr.every(function(stepCount) {
    return stepCount >= 10000
})

// console.log(areAllOver10k)

const areSomeOver10k = dailyStepsArr.some(function(stepCount) {
    return stepCount >= 10000
})

// console.log(areSomeOver10k)

const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76]

const invoiceOver1K = invoicesUSDArr.find(function(invoice){
    return invoice > 1000
})

const invoiceIndexOver1k = invoicesUSDArr.findIndex(function(invoice){
    return invoice > 1000
})

// console.log(invoicesUSDArr.indexOf(26))

console.log(invoicesUSDArr.at(-2))