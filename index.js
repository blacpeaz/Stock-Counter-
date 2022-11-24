let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count")
console.log(countEl)
console.log(saveEl)

let count = 0
function increment() {
    count = count + 1
    countEl.textContent = count
}

function decrement() {
    count = count - 1 // or count += -1
    countEl.innerText = count
}

function reset() {
    count = 0
    countEl.innerText = count
}

function save() {
    let savedStr = count + " - "
    saveEl.textContent += savedStr // we use .textContent when we want the spaces which we applied to show
    count = 0
    countEl.innerText = count
}
