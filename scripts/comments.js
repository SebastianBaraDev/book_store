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

    saveToLocalStorage(bookIndex, commentIndex);
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
    commentsHTML +=  `<p><span style="font-weight: bold;">${name}</span>:____<i>"${comment}"</i> </p>`;

}

 return commentsHTML;
}

    // Kommentare löschen