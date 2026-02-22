function addComment(bookIndex, commentIndex) {
  let userInput = document.getElementById('userInput' + bookIndex);
  let commentInput = document.getElementById('commentInput' + bookIndex);

  if (userInput.value && commentInput.value != "") {
    books[bookIndex].comments.push({
      "name": userInput.value,
      "comment": commentInput.value
    })
  } else {
    alert("Bitte füllen Sie beide Felder aus, um einen Kommentar hinzuzufügen.");
  }

    saveToLocalStorage();
    renderBooks(bookIndex);
    userInput.value = "";
    commentInput.value = "";
  }

function renderCommentSection(bookIndex) {
 let commentsHTML = document.getElementById('comment' + bookIndex);
 commentsHTML = "";
  for (let commentIndex = 0; commentIndex < books[bookIndex].comments.length; commentIndex++) {
    let comment = books[bookIndex].comments[commentIndex].comment;
    let name = books[bookIndex].comments[commentIndex].name;
    commentsHTML +=  `<div class="comment">
                        <p>
                            <span style="font-weight: bold; text-decoration: underline;">${name}</span>: 
                            <br>
                            <i>"${comment}"</i>
                        </p>
                            <img src="assets/icons/trash.png" alt="delete" class="deleteComment" onclick="deleteComment(${bookIndex}, ${commentIndex})">
                      </div>
                     `;

}

 return commentsHTML;
}


function deleteComment(bookIndex, commentIndex) {
    books[bookIndex].comments.splice(commentIndex,1);
    saveToLocalStorage();
    renderBooks(bookIndex);
}