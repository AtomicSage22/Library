//Variable Declaration section.

const container = document.querySelector(".container");
const addBook = document.querySelector("button");
const form = document.querySelector(".form-container");
const submitBook = document.querySelector("input.submit");

const myLibrary = [];

//Function Declaration section.

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        
        return `${title} by ${author}, ${pages} pages, ${read ? "have read" : "not read yet"}`
    };
}

const bookMaker = (title, author, pages, read) => {
    myLibrary.push(new Book(title, author, pages, read));
    updateContainer();
}

const updateContainer = () =>{
    container.textContent = "";
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = "card";
        const title = document.createElement('p');
        title.textContent = book.title;
        const author = document.createElement('p');
        author.textContent = book.author;
        const pages = document.createElement('p');
        pages.textContent = book.pages;
        const deleteButton = document.createElement('button');
        deleteButton.className = "deleteButton";
        card.append(deleteButton);
        card.append(title);
        card.append(author);
        card.append(pages);
        container.append(card);
        card.setAttribute("data-index", `${index}`);
        deleteButton.addEventListener("click", () =>{
            bookRemover(deleteButton.getAttribute("data-index"));
        });
    });
}

const bookRemover = (index) => {
    myLibrary.splice(index, 1);
    updateContainer();
}

//Event Listener Section

addBook.addEventListener("click", () => {form.classList.toggle("display-form")});

submitBook.addEventListener("click", (event) => {
    event.preventDefault();
    bookMaker(document.querySelector("input#title").value,
    document.querySelector("input#author").value, 
    document.querySelector("input#pages").value, 
    document.querySelector("input#read").value);
    document.querySelector("input#title").value = "";
    document.querySelector("input#author").value = "";
    document.querySelector("input#pages").value = "";
    document.querySelector("input#read").value = "";
    form.classList.toggle("display-form")

});



