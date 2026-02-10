let books = [
  {
    "name": "Die Krone von Eldoria",
    "author": "Arin Falkenstein",
    "likes": 2100,
    "liked": true,
    "price": 24.99,
    "publishedYear": 2014,
    "genre": "Fantasy",
    "comments": [
      {
        "name": "FantasyHero",
        "comment": "Eine epische Reise mit einer unglaublich detailreichen Welt."
      },
      {
        "name": "LeserMax",
        "comment": "Erinnert an klassische High-Fantasy – absolut großartig."
      }
    ]
  },
  {
    "name": "Sterne über Andromeda",
    "author": "Lena Kosmos",
    "likes": 1650,
    "liked": false,
    "price": 19.50,
    "publishedYear": 2020,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "SciFiFan",
        "comment": "Spannende Zukunftsvisionen und starke Charaktere."
      }
    ]
  },
  {
    "name": "Der Pfad der inneren Klarheit",
    "author": "Jonas Licht",
    "likes": 3200,
    "liked": true,
    "price": 18.90,
    "publishedYear": 2018,
    "genre": "Persönlichkeitsentwicklung",
    "comments": [
      {
        "name": "MindsetQueen",
        "comment": "Ein inspirierendes Buch, das zum Nachdenken anregt."
      },
      {
        "name": "LifeChanger",
        "comment": "Hat meine Sicht auf viele Dinge nachhaltig verändert."
      }
    ]
  },
  {
    "name": "Reichtum beginnt im Kopf",
    "author": "Martin Goldmann",
    "likes": 4100,
    "liked": true,
    "price": 21.00,
    "publishedYear": 2016,
    "genre": "Finanzen",
    "comments": [
      {
        "name": "FinanceGuy",
        "comment": "Einfach erklärt und extrem motivierend."
      }
    ]
  },
  {
    "name": "Das Vermächtnis der Drachen",
    "author": "Helena Sturm",
    "likes": 2750,
    "liked": false,
    "price": 22.50,
    "publishedYear": 2019,
    "genre": "Fantasy",
    "comments": []
  },
  {
    "name": "Jenseits der Galaxiengrenze",
    "author": "Tarek Nova",
    "likes": 1980,
    "liked": true,
    "price": 20.00,
    "publishedYear": 2017,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "SpaceTraveler",
        "comment": "Ein klassisches Weltraumabenteuer mit modernem Touch."
      }
    ]
  },
  {
    "name": "Der Alchemist des Alltags",
    "author": "Samuel Rivera",
    "likes": 3600,
    "liked": true,
    "price": 17.99,
    "publishedYear": 2015,
    "genre": "Persönlichkeitsentwicklung",
    "comments": [
      {
        "name": "SoulReader",
        "comment": "Poetisch, tiefgründig und sehr inspirierend."
      }
    ]
  },
  {
    "name": "Finanzielle Freiheit Schritt für Schritt",
    "author": "Robert Stein",
    "likes": 2900,
    "liked": false,
    "price": 23.75,
    "publishedYear": 2021,
    "genre": "Finanzen",
    "comments": [
      {
        "name": "MoneyMind",
        "comment": "Praxisnah und gut strukturiert – ideal für Einsteiger."
      }
    ]
  }
];

function renderBooks() {
  let bookList = document.getElementById("book_list");
  bookList.innerHTML = "";

    for (let booksIndex = 0; booksIndex < books.length; booksIndex++) {
        bookList.innerHTML += getBookTemplate(booksIndex);
    }
}

let bookList = document.getElementById("book_list");

// Buchtitel like / dislike
// Kommentare hinzufügen
    // Kommentarfeld
    // Kommentare speichern
    // Kommentare anzeigen
    // Kommentare löschen
// localStorage verwenden, um die Daten zu speichern

// Bücher bewerten
// Bücher löschen
// Bücher hinzufügen