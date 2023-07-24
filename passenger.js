let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0

console.log(countEl)

function increment() {
        count += 1        //count = count + 1 
        countEl.innerText = count
}

function save() {
    let countstr = count + "-"
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}

function decrement() {
    if(count>0){
        count -= 1
        countEl.innerText = count
    }   
}