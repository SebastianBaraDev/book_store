function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function loadFromLocalStorage() {
  let savedBooks = JSON.parse(localStorage.getItem("books"));
    if (savedBooks !== null) {
        books = savedBooks;
    }
}