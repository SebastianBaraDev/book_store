// Book List Template
function getBookTemplate(bookIndex) {
    let book = books[bookIndex];
    return `<div class="BookWidget">

        <h3>${book.name}</h3>
    
    <hr>
        <img src="${book.cover}" alt="${book.name} Cover" class="bookCover">
    <hr>

    <div class="priceLikes">
        <p class="price">${book.price} €</p>
            <div class="likeCounter">
                <p>${book.likes}</p>
                <img id="likeHeart${bookIndex}" class="likeIcon" src="./assets/icons/unliked.png" onclick="toggleHeart(${bookIndex})">
            </div>
    </div>

    <div class="info">
        <div class="infoBoxLeft">
            <p>Author:</p>
            <p>Published:</p>
            <p>Genre:</p>
        </div>
        <div class="infoBoxRight">
            <p>${book.author}</p>
            <p>${book.publishedYear}</p>
            <p>${book.genre}</p>
        </div>
    </div>

    <hr>

    <div class="commentSection">
        <h4>Kommentare:</h4>
            <div class="comments">
                ${renderCommentSection(bookIndex)}
            </div>
            <input type="text" id="userInput${bookIndex}" class="userInput" placeholder="User Name...">
        <div class="addComment">
            <input type="text" id="commentInput${bookIndex}" class="commentInput" placeholder="Kommentar hinzufügen...">
            <img src="./assets/icons/send.png" alt="Send Icon" class="sendIcon" onclick="addComment(${bookIndex})">
    </div>

    </div>`;
}

