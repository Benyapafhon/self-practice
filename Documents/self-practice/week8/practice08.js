// Step 1: Create an array to hold quote objects
let quotes = []
function addQuote(content, author) {
    quotes.push({ content, author });
}
// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById("quote-list");
 
// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
    quoteList.innerHTML = ""
    quotes.forEach((quote) => {
        const p = document.createElement("p")
        p.textContent = (quote.content + ' - ' + quote.author)
        quoteList.appendChild(p)
  })
}
 
// Step 4: Add test quotes manually and call renderQuotes()
// Example:
addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
renderQuotes();
 
 