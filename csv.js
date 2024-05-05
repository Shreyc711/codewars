function arrayToCSV(array) {
    let csvString = '';
    array.forEach(row => {
        csvString += row.join(',') + '\n';
    });
    return csvString.trim(); // Removes trailing newline
}