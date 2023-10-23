const tableArea = document.querySelector('.table-area')
const textArea = document.querySelector('textarea')
const start = document.querySelector('.start')
const clear = document.querySelector('.clear')
const topicBtn = document.querySelector('.copy-topic-btn')
const numBtn = document.querySelector('.copy-num-btn')


let name_counts = {}

start.addEventListener('click', () => {
    let inputArray = textArea.value.split('\n')
    for (var i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i].toLowerCase()
        inputArray[i] = inputArray[i].replace(/^\s+|\s+$/g, '');
    }
    inputArray.forEach(element => {
        if (element in name_counts) {
            name_counts[element] += 1
        } else {
            name_counts[element] = 1
        }
    });
    // console.log(name_counts)

    const tableElement = objectToTable(name_counts);
    tableArea.appendChild(tableElement);
})

clear.addEventListener('click', (e) => {
    textArea.value = ''
    console.log("Clear button pressed")
    const tableExists = document.querySelector('.table')
    if (tableExists) {
        console.log("Table exists, now removed")
        tableExists.parentNode.removeChild(tableExists)
    }
})

topicBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(Object.keys(name_counts).join("\n"));
    topicBtn.textContent = "Copied!"

    // console.log(Object.keys(name_counts).join("\n"))
})

numBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(Object.keys(name_counts).map(function (keys) {
        return name_counts[keys]
    }).join("\n"));
    numBtn.textContent = "Copied!"

    // console.log(Object.keys(name_counts).map(function (keys) {
    //     return name_counts[keys]
    // }).join("\n"))
})


// OKAY, This function was copied from GPT, my bad
function objectToTable(data) {
    const table = document.createElement('table');
    table.className = "table"
    const tbody = table.createTBody();

    for (const key in data) {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        cell1.textContent = key;
        const cell2 = row.insertCell(1);
        cell2.textContent = data[key];
    }

    return table;
}
