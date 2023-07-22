var quotes = [
    {
        'author': " -- Oscar Wilde",
        'quote': "''Be yourself; everyone else is already taken.''"
    }
    , {
        'author': " -- Frank Zappa",
        'quote': "''So many books, so little time.''"
    }
    , {
        'author': "-- Marcus Tullius Cicero",
        'quote': "''A room without books is like a body without a soul.''"
    }
    , {
        'author': "-- Bernard M. Baruch",
        'quote': "''Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.''"
    }
    , {
        'author': "-- William W. Purkey",
        'quote': "''You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.''"
    }
    , {
        'author': "-- Dr. Seuss",
        'quote': "''You know you're in love when you can't fall asleep because reality is finally better than your dreams.''"
    }
    , {
        'author': "-- Mae West",
        'quote': "''You only live once, but if you do it right, once is enough.''"
    }
    , {
        'author': "-- Mahatma Gandhi",
        'quote': "''Be the change that you wish to see in the world.''"
    }
    , {
        'author': "-- Robert Frost",
        'quote': "''In three words I can sum up everything I've learned about life: it goes on.''"
    }
];

var availableQuotes = [];


function newQuote() {
    if (availableQuotes.length === 0) {
        availableQuotes = [...quotes]
    };
    var x = Math.floor(Math.random() * availableQuotes.length);
    var randomQuote = availableQuotes[x]
    document.getElementById("quote").innerText = (randomQuote.quote);
    document.getElementById("author").innerText = (randomQuote.author);
    availableQuotes.splice(x, 1);

}





// var previousQuotes = [];

// function getRandomQuote() {
//     var availableQuotes = quotes.filter(quote => !previousQuotes.includes(quote));
//     if (availableQuotes.length === 0) {
//         previousQuotes = [];
//     }
//     var x = Math.floor(Math.random() * availableQuotes.length);
//     var randomQuote = availableQuotes[x];
//     previousQuotes.push(randomQuote);
//     return randomQuote;
// }

// function newQuote() {
//     var randomQuote = getRandomQuote();
//     document.getElementById("quote").innerText = randomQuote.quote;
// document.getElementById("author").innerText = randomQuote.author;
// }

