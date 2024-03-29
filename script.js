class Book {
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read
    }
    toggleRead() {
        this.read ? this.read = false : this.read = true;
    }
}

const myLibrary = [];

//example books
myLibrary.push(new Book('Capitalist Realism: Is There No Alternative?', 'Mark Fisher', 81, true));
myLibrary.push(new Book("The Hitchhiker's Guide to the Galaxy", 'Douglas Adams', 225, true));

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked; 
    if (title){
        myLibrary.push(new Book(title, author, pages, read));
    } else {
        alert('Please type in book title');
    }
}

function clearForm() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = document.querySelector('#read').default;
}

const wrapper = document.querySelector('.wrapper');

function makeCard(){
    for (const book in myLibrary) {
        if (!wrapper.childNodes[book]){
            let newCard = document.createElement('div');
            newCard.classList.add('card');
            wrapper.appendChild(newCard);
            newCard.setAttribute('id', book);

            let cardTitle = document.createElement('div');
            cardTitle.classList.add('card-title');
            newCard.appendChild(cardTitle);
            cardTitle.textContent = `${myLibrary[book].title}`;

            let cardAuthor = document.createElement('div');
            cardAuthor.classList.add('card-author');
            newCard.appendChild(cardAuthor);
            cardAuthor.textContent = myLibrary[book].author;

            let cardPages = document.createElement('div');
            cardPages.classList.add('card-pages');
            newCard.appendChild(cardPages);
            myLibrary[book].pages !== '' ? cardPages.textContent = `${myLibrary[book].pages} pages` : cardPages.textContent = '';

            let cardButtons = document.createElement('div');
            cardButtons.classList.add('card-buttons');
            newCard.appendChild(cardButtons);

            let readToggle = document.createElement('button');
            readToggle.classList.add('read-toggle');
            readToggle.textContent = 'Read';
            cardButtons.appendChild(readToggle);
            readToggle.addEventListener('click', function(){
                myLibrary[newCard.getAttribute('id')].toggleRead();
                myLibrary[newCard.getAttribute('id')].read ? readToggle.classList.add('read') : readToggle.classList.remove('read');
            }); 
            
            myLibrary[book].read ? readToggle.classList.add('read') : readToggle.classList.remove('read');

            let removeButton = document.createElement('button');
            removeButton.classList.add('remove-button');
            removeButton.textContent = 'Remove';
            cardButtons.appendChild(removeButton);
            removeButton.addEventListener('click', function(){                
                wrapper.children[newCard.getAttribute('id')].remove() 
                myLibrary.splice([newCard.getAttribute('id')], 1)

                for (i = 0; i < myLibrary.length; i++) {
                    wrapper.children[i].setAttribute('id', i);
                }
            });
        }
    }
}

document.querySelector('#submit').addEventListener('click', function(){
    addBookToLibrary();
    makeCard(); 
    clearForm();   
});

makeCard();    

const addBookButton = document.querySelector("#addBook");
const cancelButton = document.querySelector("#cancel");
const dialog = document.querySelector("#addBookDialog");

addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelButton.addEventListener("click", () => {
  dialog.close();
});