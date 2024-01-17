const myLibrary = [{
    "title": "Señor de los anillos",
    "author": "J.R.R. Tolkien",
    "pages": "1000000",
    "read": false
},
{
    "title": "Miles de ojos",
    "author": "Maximiliano Barrientos",
    "pages": "248",
    "read": true
}
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked; 
    myLibrary.push(new Book(title, author, pages, read));
}

function clearForm() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = document.querySelector('#read').default;
}

const wrapper = document.querySelector('.wrapper');
const indexRendered =[];
function makeCard(){
    for (const book in myLibrary) {
        if (!indexRendered.includes(book)){
            let newCard = document.createElement('div');
            newCard.classList.add('card');
            wrapper.appendChild(newCard);
            newCard.setAttribute('id', book);

            let cardTitle = document.createElement('div');
            cardTitle.classList.add('card-title');
            newCard.appendChild(cardTitle);
            cardTitle.textContent = `${myLibrary[book].title} index: ${book}`;

            let cardAuthor = document.createElement('div');
            cardAuthor.classList.add('card-author');
            newCard.appendChild(cardAuthor);
            cardAuthor.textContent = myLibrary[book].author;

            let cardPages = document.createElement('div');
            cardPages.classList.add('card-pages');
            newCard.appendChild(cardPages);
            cardPages.textContent = `pages: ${myLibrary[book].pages}`;

            let cardRead = document.createElement('div');
            cardRead.classList.add('card-read');
            newCard.appendChild(cardRead);
            cardRead.textContent = `read: ${myLibrary[book].read}`;

            let removeButton = document.createElement('button');
            removeButton.classList.add('remove-button');
            removeButton.textContent = 'Remove';
            newCard.appendChild(removeButton);
            removeButton.addEventListener('click', function(){                
                wrapper.children[newCard.getAttribute('id')].remove() 
                myLibrary.splice([newCard.getAttribute('id')], 1)
                indexRendered.splice(newCard.getAttribute('id'), 1);

                for (i = 0; i < myLibrary.length; i++) {
                    wrapper.children[i].setAttribute('id', i);
                }
            })

            indexRendered.push(wrapper.children[book].attributes['id'].nodeValue)
        }
    }
}

document.querySelector('#submit').addEventListener('click', function(){
    addBookToLibrary();
    makeCard(); 
    clearForm();   
});

makeCard();    

// COSAS DEL BOTON Y EL DIALOG

const addBookButton = document.querySelector("#addBook");
const cancelButton = document.querySelector("#cancel");
const dialog = document.querySelector("#addBookDialog");

addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelButton.addEventListener("click", () => {
  dialog.close();
});