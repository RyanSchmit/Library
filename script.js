const submitBtn = document.querySelector(".submit-btn");
let booksSection = document.querySelector(".books");

let myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet")];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function resetForm() {
	let read = document.getElementById("read");
	let inputs = document.querySelectorAll('form input');
	inputs.forEach((input) => {
		input.value = '';
	})
	read.checked = false;
}

function addBookToLibrary() {
	let title = document.getElementById("title");
	let author = document.getElementById("author");
	let pages = document.getElementById("pages");
	let read = document.getElementById("read");
	myLibrary.push(new Book(title.value, author.value, pages.value, read.value));
	resetForm();
	displayBooks();
}


function displayBooks() {
	booksSection .innerHTML = '';
	myLibrary.forEach((book) => {
		let bookHtml = `<div class="book">
		<p>${book.title}</p>
		<p>${book.author}</p>
		<p>${book.pages} pages </p>
		<button>Read</button>
		</div>`;
		booksSection.innerHTML += bookHtml;
	})
}

displayBooks();

submitBtn.addEventListener('click', addBookToLibrary);


