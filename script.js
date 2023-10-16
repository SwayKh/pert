const tableArea = document.querySelector('.table-area')
const textArea = document.querySelector('textarea')
const start = document.querySelector('.start')
const topicBtn = document.querySelector('.copy-topic-btn')
const numBtn = document.querySelector('copy-num-btn')


// # Create a dictionary to store the counts

let name_counts = {}

start.addEventListener('click', () => {
    let inputArray = textArea.value.split('\n')
    inputArray.forEach(element => {
        if (element in name_counts) {
            name_counts[element] += 1
        } else {
            name_counts[element] = 1
        }
    });
    console.log(name_counts)

    // Get the container element and append the table
    const tableElement = objectToTable(name_counts);
    tableArea.appendChild(tableElement);
})

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
