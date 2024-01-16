const myLibrary = [];

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

function createCard(){
    for (let i = 0; i < myLibrary.length; i++){
        document.querySelector('.card-title').textContent = myLibrary[i].title;
        document.querySelector('.card-author').textContent = myLibrary[i].author;
        document.querySelector('.card-pages').textContent = myLibrary[i].pages;
        document.querySelector('.card-read').textContent = myLibrary[i].read;
    }
}

document.querySelector('#submit').addEventListener('click', function(){
    addBookToLibrary();
    createCard();    
});