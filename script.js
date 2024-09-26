// Function to add a book to the table
document.getElementById('submit').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate input
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new row
    const tableBody = document.getElementById('book-list');
    const newRow = document.createElement('tr');

    // Create cells for the new row
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="btn btn-danger delete">Clear</button></td>
    `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Clear input fields after adding
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

    // Add event listener for the clear button
    const clearButton = newRow.querySelector('.delete');
    clearButton.addEventListener('click', function() {
        tableBody.removeChild(newRow); // Remove the row from the table
    });
});