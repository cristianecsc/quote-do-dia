// Trecho do Dia - Script principal

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

let quotes = [];
let lastQuoteIndex = -1;


// Carrega as frases do arquivo JSON
async function loadQuotes() {
    try {
        const response = await fetch("quotes.json");

        if (!response.ok) {
            throw new Error("Não foi possível carregar as frases.");
        }

        quotes = await response.json();

        showRandomQuote();

    } catch (error) {
        quoteElement.textContent = "Não foi possível carregar o trecho do dia.";
        authorElement.textContent = "";

        console.error(error);
    }
}


// Escolhe uma frase aleatória
function showRandomQuote() {

    if (quotes.length === 0) return;

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (
        randomIndex === lastQuoteIndex &&
        quotes.length > 1
    );


    lastQuoteIndex = randomIndex;


    const selectedQuote = quotes[randomIndex];


    // Inicia animação de saída
    quoteElement.classList.remove("fade");
    authorElement.classList.remove("fade");


    setTimeout(() => {

        quoteElement.textContent = `"${selectedQuote.text}"`;
        authorElement.textContent = selectedQuote.author 
            ? `— ${selectedQuote.author}` 
            : "";


        // Animação de entrada
        quoteElement.classList.add("fade");
        authorElement.classList.add("fade");

    }, 200);

}


// Atualiza automaticamente a cada 60 segundos
setInterval(showRandomQuote, 60000);


// Inicializa o widget
loadQuotes();
