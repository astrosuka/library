//dummy library for testing purposes:
// const myLibrary = [
//     {title: "libro 1", author: 'javriel', pages: 200, read: true},
//     {title: "libraso increible", author: 'Gargolina', pages: 400, read: false},
//     {title: "libraso increible 10 puntos", author: 'Gargolina', pages: 400, read: true},
//     {title: "libraso increible", author: 'Gargolina', pages: 400, read: false},
// ];

//real library:
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read ? this.read = false : this.read = true;
}

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

            let readToggle = document.createElement('button');
            readToggle.classList.add('read-toggle');
            readToggle.textContent = 'Read';
            newCard.appendChild(readToggle);
            readToggle.addEventListener('click', function(){
                console.log(myLibrary[book])
                myLibrary[book].toggleRead();
                myLibrary[book].read ? readToggle.classList.add('read') : readToggle.classList.remove('read');
            }); 
            
            myLibrary[book].read ? readToggle.classList.add('read')  : readToggle.classList.remove('read');

            let removeButton = document.createElement('button');
            removeButton.classList.add('remove-button');
            removeButton.textContent = 'Remove';
            newCard.appendChild(removeButton);
            removeButton.addEventListener('click', function(){                
                wrapper.children[newCard.getAttribute('id')].remove() 
                myLibrary.splice([newCard.getAttribute('id')], 1)

                for (i = 0; i < myLibrary.length; i++) {
                    wrapper.children[i].setAttribute('id', i);
                }
            })
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