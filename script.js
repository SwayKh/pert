const tableArea = document.querySelector('.table-area')
const input = document.querySelector('.input')
const start = document.querySelector('.start')
const topicBtn = document.querySelector('.copy-topic-btn')
const numBtn = document.querySelector('copy-num-btn')


// # Create a dictionary to store the counts
// name_counts = {}

// # Read names from the input file
// with open('TopicsEntry.txt', 'r') as file:
// for line in file:
//     name = line.strip()  # Assuming each name is on a new line
// if name in name_counts:
//     name_counts[name] += 1
// else:
// name_counts[name] = 1

// # Create a file to store unique names and another file to store the counts
// with open('unique_names.txt', 'w') as unique_file, open('name_counts.txt', 'w') as counts_file:
// for name, count in name_counts.items():
//     unique_file.write(f'{name}\n')
// counts_file.write(f'{count}\n')