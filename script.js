function renderBooks() {
  let bookList = document.getElementById("book_list");
  bookList.innerHTML = "";

    for (let booksIndex = 0; booksIndex < books.length; booksIndex++) {
        bookList.innerHTML += getBookTemplate(booksIndex);
    }

    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
      let img = document.getElementById('likeHeart' + bookIndex);
      if (books[bookIndex].liked === true) {
        img.src = './assets/icons/liked.png';
      } else {
        img.src = './assets/icons/unliked.png';
      }
    }
}

// Toogle Like Heart Function
function toggleHeart(bookIndex) {
  let img = document.getElementById('likeHeart' + bookIndex);
  if (img.src.endsWith('unliked.png')) {
    img.src = './assets/icons/liked.png';
    books[bookIndex].liked = true;
    books[bookIndex].likes++;
  } else if (img.src.endsWith('liked.png')) {
    img.src = './assets/icons/unliked.png';
    books[bookIndex].liked = false;
    books[bookIndex].likes--;
  }
  renderBooks();
}