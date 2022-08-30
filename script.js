let myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet"), new Book("You", "Joe Will", "344 pages", "not read yet")];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {
	myLibrary.forEach((book) => {
		console.log(book);
	})
}

addBookToLibrary();


