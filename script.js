let books = [
  {
    "name": "Die Chroniken von Eldoria",
    "author": "Jonas Wacker",
    "cover": "./assets/img/die_chroniken_von_eldoria_cover.jpg",
    "likes": 2100,
    "liked": true,
    "price": 24.99,
    "publishedYear": 2024,
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
    "name": "Die Hüter der vier Elemente",
    "author": "Dagmar Winter",
    "cover": "./assets/img/die_hueter_der_vier_elemente.jpg",
    "likes": 1650,
    "liked": false,
    "price": 19.95,
    "publishedYear": 2024,
    "genre": "Fantasy",
    "comments": [
      {
        "name": "FantasyFan",
        "comment": "Spannende Fantasyvisionen und starke Charaktere."
      }
    ]
  },
  {
    "name": "Der Weg zur inneren Klarheit",
    "author": "Eva Barwig ",
    "cover": "./assets/img/der_weg_zur_inneren_klarheit.jpg",
    "likes": 3200,
    "liked": true,
    "price": 18.99,
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
    "author": "Jonathan Reeve",
    "cover": "./assets/img/reichtum_beginnt_im_kopf.jpg",
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
    "author": " Jupiter Phaeton",
    "cover": "./assets/img/das_vermaechtnis_der_drachen.jpg",
    "likes": 2750,
    "liked": false,
    "price": 22.50,
    "publishedYear": 2019,
    "genre": "Fantasy",
    "comments": []
  },
  {
    "name": "Jenseits der Götter",
    "author": "Daniel Krinke",
    "cover": "./assets/img/jenseits_der_goetter.jpg",
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
    "name": "Der Alchemist",
    "author": "Paulo Coelho",
    "cover": "./assets/img/der_alchemist.jpg",
    "likes": 3600,
    "liked": true,
    "price": 11.99,
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
    "name": "Der Weg zur finanziellen Freiheit",
    "author": "Bodo Schäfer",
    "cover": "./assets/img/der_weg_zur_finanziellen_freiheit.jpg",
    "likes": 2900,
    "liked": false,
    "price": 13.75,
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

// Buchtitel like / dislike
// Kommentare hinzufügen
    // Kommentare speichern
    // Kommentare anzeigen
    // Kommentare löschen
// localStorage verwenden, um die Daten zu speichern

// Bücher bewerten
// Bücher löschen
// Bücher hinzufügen