// Empty array for the calculations history
const history = []

// Event listener that listens for the submit button so as to do the calculation when clicked
document.getElementById("numbers").addEventListener("submit", (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    // console.log(data.get("num1"))
    let num1 = parseFloat(data.get("num1"))
    let num2 = parseFloat(data.get("num2"))
    let operator = data.get("operator")

    const calculate = () => {
        let result;
        // If loop to make sure the operators work as they should
        if (operator === '+') {
            result = add(num1, num2)
        }else if (operator === '-') {
            result = subtract(num1, num2)
        }else if(operator === '/' && num1 !== 0 && num2 !== 0) {
            result = divide(num1, num2)
        }else if(operator === '*') {
            result = multiply(num1, num2)
        }else if(operator === '/' && num1 === 0 || num2 === 0) {
            result = "Error: Cannot divide number by 0"
        }else if(operator !== '+', '-', '/','*'){
            result = "Error: that is not an operator"
        }

        console.log(result)

        // Create an object for the calculations properties
        const calcs = {
            id : crypto.randomUUID(),
            Operands : [num1, num2],
            Operator : operator,
            Result : result
        }

        // Store the calculations in an array 
        history.push(calcs)

        console.log(history)

        let calc = "" 
        const story = document.getElementById("history")

        // Loops the history array to get one array item
        for (let i = 0; i < history.length; i++) {

            calc = history[i]

            // create a list item to hold a calculation history
            const li = document.createElement("li")
            li.textContent = calc.Operands[0]+ " " +calc.Operator + " " +calc.Operands[1] + " = " +calc.Result
            story.append(li)

            // I emptied the array to prevent appending duplicates
            history.length = 0
        }

        // Return the result of the calculations
        return result
    }
    calculate()
})


// Create functions for each operation
// Addition function
const add = (a, b) => {
    return a+b
}

// Subtraction function
const subtract = (a, b) => { 
    return a-b
}

// Division function
const divide = (a, b) => {
    return a/b
}

// multiplication function
const multiply = (a, b) => {
    return a*b
}