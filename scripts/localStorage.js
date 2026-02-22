function saveToLocalStorage(bookIndex, commentIndex) {
  localStorage.setItem("comments_" + bookIndex + "_" + commentIndex, JSON.stringify(books[bookIndex].comments[commentIndex]));
}

function loadFromLocalStorage(bookIndex, commentIndex) {
  let savedComments = JSON.parse(localStorage.getItem("comments_" + bookIndex + "_" + commentIndex));
    if (savedComments !== null) {
        books[bookIndex].comments[commentIndex] = savedComments;
    }
}