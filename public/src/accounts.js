const {findAuthorById} = require("./books");

function findAccountById(accounts, id) {
    return accounts.find((acct) => acct.id === id);
}

function sortAccountsByLastName(accounts) {
    // console.log(accounts);
    accounts.sort((acct1, acct2) =>
        acct1.name.last.toLowerCase() > acct2.name.last.toLowerCase() ? 1 : -1
    );
    return accounts;
}

function getTotalNumberOfBorrows(account, books) {
    let id = account.id;
    let count = 0;
    for (let book of books) {
        let arrayOfMatchingBorrows = book.borrows.filter(
            (borrow) => borrow.id === id
        );
        let numOfBorrowsInBook = arrayOfMatchingBorrows.length;
        count += numOfBorrowsInBook;
    }
    return count;
}

function getBooksPossessedByAccount(account, books, authors) {
	let bookList = books.filter(book=>{
		let found =  book.borrows.find(borrow=>{
			return borrow.id === account.id && borrow.returned === false;
		})
		return found? true:false;
	}).map(book=>{
		let authorObj = authors.find(author=> author.id === book.authorId)
        // let authorObj = findAuthorById(authors, book.authorId)
		book.author = authorObj;
		return book;
	})
	// console.log(bookList);

	return bookList;
}

module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
};
