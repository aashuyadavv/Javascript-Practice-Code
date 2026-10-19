const expensesAndRefunds = [
    { description: 'groceries' , amount: 50, year: 2023 },
    { description: 'electronics' , amount: -30, year: 2023 },
    { description: 'dinner' , amount: 40, year: 2023 },
    { description: 'clothing' , amount: 60, year: 2023 },
    { description: 'entertainment' , amount: 25, year: 2023 },
    { description: 'rent' , amount: -500, year: 2023 },
    { description: 'utilities' , amount: 100, year: 2024 },
    { description: 'books' , amount: 20, year: 2024 },
    { description: 'fitness' , amount: 30, year: 2024 },
    { description: 'gifts' , amount: 15, year: 2024 },
]

let totalSpent = 0
const cutoffDate = 2024

for (let i = 0; i < expensesAndRefunds.length; i++) {
const currentexpenseOrRefund = expensesAndRefunds[i]

if (currentexpenseOrRefund.year >= cutoffDate) {
   console.log(`Reached cutoff date, exiting loop`)
    break
}

if (currentexpenseOrRefund.amount < 0) {
    console.log(`skipping ${currentexpenseOrRefund.description} due to refund`)
    continue
}

totalSpent += currentexpenseOrRefund.amount
}

console.log(`Total amount spent on items in 2023: $${totalSpent}`)