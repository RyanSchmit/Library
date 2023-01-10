const form = document.querySelector('.input-books');
let booksSection = document.querySelector(".books");

class Book {
	constructor (title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

let myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien", "295", "Not Read")];

function addBookToLibrary(e) {
	e.preventDefault();
	let title = document.getElementById("title");
	let author = document.getElementById("author");
	let pages = document.getElementById("pages");
	let read = document.getElementById("read");
	if (read.value == "on") {
		read.value = 'Read';
	}
	else {
		read.value = 'Not Read';
	}
	myLibrary.push(new Book(title.value, author.value, pages.value, read.value));
	displayBooks();
	form.reset();
}


function displayBooks() {
	booksSection .innerHTML = '';
	let i = 0;
	myLibrary.forEach((book) => {
		let bookHtml = `<div class="book" id="${i}">
		<p class="title">${book.title}</p>
		<p class="author">${book.author}</p>
		<p class="pages">${book.pages} pages </p>
		<button class="readBtn" id="${i}">${book.read}</button>
		<button class="deleteBtn" id="${i}">Delete</button>
		</div>`;
		booksSection.innerHTML += bookHtml;
		deleteButton();
		changeRead();
		i++;
	})
}


function deleteButton() {
	let deleteButtons = document.querySelectorAll('.deleteBtn');
	deleteButtons.forEach((button) => {
		button.addEventListener('click', () => {
			myLibrary.splice(button.id, 1);
			displayBooks();
		});
	});
}

function changeRead() {
	let readButtons = document.querySelectorAll('.readBtn');
	readButtons.forEach((button) => {
		button.addEventListener('click', () => {
			let readBook = myLibrary[button.id];
			let readStatus = readBook.read;
			if (readStatus == 'Not Read') {
				readBook.read = 'Read';
			}
			else {
				readBook.read = 'Not Read';
			}
			displayBooks();
		});
	});
}

displayBooks();

form.addEventListener('submit', addBookToLibrary);
