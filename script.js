document.addEventListener('DOMContentLoaded', (event) => {
  const myLibrary = [];

  // Object constructor for book generation
  function Book(title, author, totalPages) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;

    // Method to create a card element
    this.createCard = function() {
      const card = document.createElement('div');
      card.classList.add('card');

      const cardTitle = document.createElement('h3');
      cardTitle.textContent = this.title;
      card.appendChild(cardTitle);

      const cardAuthor = document.createElement('p');
      cardAuthor.textContent = `Author: ${this.author}`;
      card.appendChild(cardAuthor);

      const cardPages = document.createElement('p');
      cardPages.textContent = `Total Pages: ${this.totalPages}`;
      card.appendChild(cardPages);

      const readOrNot = document.createElement('button');
       readOrNot.classList = 'readOrNot';
       readOrNot.textContent = 'new';
       card.appendChild(readOrNot);

       readOrNot.addEventListener('click',() =>{
        readOrNot.textContent = 'completed';
       })
      return card;
    };
  }

  const popUp = document.querySelector('#popUp');
  const addBookButton = document.querySelector('#addBook');
  const cancel = document.querySelector('#cancel');
  const bookForm = document.querySelector('#bookForm');
  const container = document.querySelector('#container');

  // Show the dialog when "new book" button is clicked
  addBookButton.addEventListener('click', () => {
    popUp.showModal();
  });

  // Close the dialog when "cancel" button is clicked
  cancel.addEventListener('click', () => {
    popUp.close();
  });

  // Handle form submission
  bookForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from closing the dialog immediately

    // Gather data from the form fields
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const totalPages = document.querySelector('#totalPages').value;

    // Create a new book object
    const newBook = new Book(title, author, totalPages);
    myLibrary.push(newBook); // Add the new book to the library

    // Display the new book in the container
    container.appendChild(newBook.createCard());

    popUp.close(); // Close the dialog
    bookForm.reset(); // Clear the form for the next input
  });
});
