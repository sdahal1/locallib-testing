function findAuthorById(authors, id) {
  console.log("wazzaaaaa************** in find author by id function")
  return authors.find(author=>author.id===id);
}

function findBookById(books, id) {
  return books.find(book=>book.id===id);

}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = [];
  let borrowedBooks = []
  for(let book of books){
    let isReturned = book.borrows.every(b=>b.returned===true)
    // console.log("isReturned", isReturned)
    if(isReturned === true){
      returnedBooks.push(book);
    }else{
      borrowedBooks.push(book)
    }
  
  }
  return [borrowedBooks,returnedBooks]
}

function getBorrowersForBook(book, accounts) {
  //book is a book object
  return book.borrows.map(transaction=>{
    let account = accounts.find(account=> account.id === transaction.id)
    return {...account, returned: transaction.returned}
  }).slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
