const BASE_URL = 'http://localhost:3000'
const AUTHORS_URL = 'http://localhost:3000/authors'
const QUOTES_URL = 'http://localhost:3000/quotes'

window.addEventListener('load', () => {
    getQuotes()
})

//server requests
function getQuotes(){
    return fetch(QUOTES_URL)
    .then(rep => rep.json())
    .then(quotes => { 
            const quotesContainer = document.querySelector('#quotes-container');
            quotesContainer.innerHTML = '';
            quotes.forEach(quote => {
                newQuote = new Quote(quote);
                newQuote.renderQuote();
            })
        })

}
// function getLocations() {
//     fetch(BASE_URL + '/locations')
//       .then(resp => resp.json())
//       .then(data => {
//         const locationContainer = document.querySelector('#location-container');
//         locationContainer.innerHTML = '';
//         data.forEach(location => {
//           console.log(location);
//           let newLocation = new Location(location);
//           newLocation.renderLocation();
//         });
//       });
//   }

function getAuthors(){
    return fetch(AUTHORS_URL)
    .then(rep => rep.json())
    .then(authors => { 
        authors.forEach(author => {
            console.log(author)
        })

    })
}

// function renderAuthors(authors){

// }

// function addQuote(){

// }

// function deleteQuote(){

// }

//DOM rendering

// function renderCard(author){
// have an add quote Button(renderAddButton(author))
//and render this author's quotes
// }

// function renderAuthor(){
// click on card, show that quote for the author
//render a single author?
// }

// function renderAddButton(author){
// when clicked it adds quote to author
// }

// function renderQuotes(author){
// when clicked it shows this authors quotes?
// rendering quotes belonging to author?
// }

// function renderQuote(quote){
//     //shows quote 
//     //has delete button for quote
// }

//CRUD Actions

// function addQuote(event){

// }

// function deleteQuote(){

// }