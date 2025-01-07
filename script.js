const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    numberOfPages: 1234,
    isRead: true,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    numberOfPages: 1234,
    isRead: false,
  },
];
// Dom manipulation
const form = document.querySelector(".form");
const addButton = document.querySelector(".btn");
const addBookForm = document.querySelector(".add-book");
const closeBtn = document.querySelector(".close-btn");
const closeBoard = document.querySelector(".close-board");

closeBoard.addEventListener("click", () => {
  addBookForm.style.display = "none";
  closeBoard.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  addBookForm.style.display = "none";
  closeBoard.style.display = "none";
});
addButton.addEventListener("click", () => {
  addBookForm.style.display = "flex";
  closeBoard.style.display = "block";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = form.title.value;
  const author = form.author.value;
  const numberOfPages = form.numberOfPages.value;
  const isRead = form.isRead.checked;
  addBookToLibrary(title, author, numberOfPages, isRead);
  addBookForm.style.display = "none";
  closeBoard.style.display = "none";
  displayBooks();
  form.reset();
});

// book constructor

function Book(title, author, numberOfPages, isRead = false) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}

// add book to library
function addBookToLibrary(title, author, numberOfPages, isRead = false) {
  const newBook = new Book(title, author, numberOfPages, isRead);
  myLibrary.push(newBook);
}

// display books
function displayBooks() {
  const books = document.querySelector(".books");
  books.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookElement = document.createElement("li");
    bookElement.classList.add("book");
    bookElement.innerHTML = `<h2>${book.title}</h2>
          <div class="content">
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.numberOfPages}</p>
            ${
              book.isRead
                ? "<p>You have read this book</p>"
                : "You haven't read this book"
            }
          </div>
          <div class="buttons">
            <button class="btn read-btn">Read it</button>
            <button class="btn delete-btn">Delete</button>
          </div>`;
    books.appendChild(bookElement);

    // Read book update
    const readBtn = bookElement.querySelector(".read-btn");
    readBtn.addEventListener("click", () => {
      console.log("clicked");
      book.isRead = book.isRead ? false : true;
      displayBooks();
    });

    // Delete book update
    const deleteBtn = bookElement.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      displayBooks();
    });
  });
}

displayBooks();
