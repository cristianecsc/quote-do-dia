// Trecho do Dia - Script principal

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const bookElement = document.getElementById("book");

let quotes = [];
let lastQuoteIndex = -1;


// Carrega as frases

async function loadQuotes() {

    try {

        const response = await fetch("quotes.json");


        if (!response.ok) {
            throw new Error("Erro ao carregar quotes.json");
        }


        quotes = await response.json();

        showRandomQuote();


    } catch (error) {

        quoteElement.textContent =
            "Não foi possível carregar o trecho.";

        console.error(error);

    }

}


// Mostra uma frase aleatória

function showRandomQuote() {


    if (quotes.length === 0) return;


    let randomIndex;


    do {

        randomIndex = Math.floor(
            Math.random() * quotes.length
        );


    } while (
        randomIndex === lastQuoteIndex &&
        quotes.length > 1
    );


    lastQuoteIndex = randomIndex;


    const selectedQuote = quotes[randomIndex];


    // Remove animação antiga

    quoteElement.classList.remove("fade");
    authorElement.classList.remove("fade");
    bookElement.classList.remove("fade");


    setTimeout(() => {


        quoteElement.textContent =
            `"${selectedQuote.text}"`;


        authorElement.textContent =
            selectedQuote.author
            ? `— ${selectedQuote.author}`
            : "";


        bookElement.textContent =
            selectedQuote.book
            ? selectedQuote.book
            : "";


        // Aplica animação

        quoteElement.classList.add("fade");
        authorElement.classList.add("fade");
        bookElement.classList.add("fade");


    }, 200);

}


// Troca automaticamente a cada 60 segundos

setInterval(
    showRandomQuote,
    60000
);


// Inicialização

loadQuotes();
