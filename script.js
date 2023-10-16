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
    }
    );
    console.table(name_counts)
    // console.log(Object.keys(name_counts).length)
    // tableArea.textContent = name_counts
})
