// Book List Template
function getBookTemplate(bookIndex) {
    return `<div class="BookWidget">
    <h3>${allBooks.booksTitle[bookIndex]}</h3>
    <p>${allBooks.booksDescription[bookIndex]}</p>
    <div class="icon-container">
    <img class="icons" src="./assets/icons/trash_icon.png" onclick="moveBook(${bookIndex}, 'books', 'trashBooks')">
    <img class="icons" src="./assets/icons/archiv_icon.png" onclick="moveBook(${bookIndex}, 'books', 'archivBooks')">
    </div>
    </div>`;
}

//Book Title Box
//Book Cover Box
//Book Price Box
    //Price
        //Likes
        //img
//Book Rating Box
    //Five empty stars
//Book Description Box
    //Author
    //Genre
    //Release Date
//Comment Section Box
    //Comment Box
        //Titel
        //Username
        //Comment Text
    //Comment Input Box
        //Input Field
        //Submit Button img


// Add Book