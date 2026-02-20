// Kommentare hinzufügen
function addComment(bookIndex) {
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

    renderComments(bookIndex);
    userInput.value = "";
    commentInput.value = "";
  }

function renderComments(bookIndex) {
      let commentsHTML = "";
      for (let commentIndex = 0; commentIndex < books[bookIndex].comments.length; commentIndex++) {
        commentsHTML += 
                `<div class="user">
                    <p>${books[bookIndex].comments[commentIndex].name}:</p>
                </div>
                <div class="comment">
                    <p>"${books[bookIndex].comments[commentIndex].comment}"</p>
                </div>`;

            return commentsHTML;
      }
}
    // Kommentare anzeigen
    // Kommentare löschen