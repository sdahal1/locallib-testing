function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  // let count = 0;
  // books.forEach(book=>{
  //   let isBookBorrowed = book.borrows.some(transaction=> transaction.returned === false);
  //   isBookBorrowed? count++ : null
  // })
  // return count;

  return books.filter(book=>{
    return book.borrows.some(transaction=> transaction.returned === false);
  }).length;
}

function getMostCommonGenres(books) {
  let genres = {}
  books.forEach(book=>{
    if(genres[book.genre]){
      genres[book.genre]+=1
    }else{
      genres[book.genre] = 1;
    }
  })

  // console.log(genres);
  let entries = Object.entries(genres).sort((subarrayA, subarrayB)=>{
    return subarrayB[1] - subarrayA[1]
  })

  // console.log(entries)
  let result = entries.map(item=>{
    let name = item[0];
    let count = item[1];
    return {name, count}
  })
  // console.log(result.slice(0,4))
  return result.slice(0,5);

}

function getMostPopularBooks(books) {
  // books.forEach(book=>{
  //   console.log(book.borrows.length);
  // })
  let result = books.sort((a,b)=>{
    // console.log(a.borrows.length)
    return b.borrows.length - a.borrows.length;
  }).map(book=>{
    const {title, borrows} = book;
    let count = borrows.length;
    return {name:title, count}
  })
  console.log(result.slice(0,5));
  return result.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let obj = {};
  books.forEach((book)=>{
    const {authorId} = book;
    obj[authorId]? obj[authorId]+=book.borrows.length : obj[authorId] = book.borrows.length;
  })
  
  let result =  authors.map(author=>{
    let count=obj[author.id];
    const {name:{first,last}} = author;
    let name = `${first} ${last}`;
    return {name, count}
  })
  result.sort((a,b)=>{
    return b.count - a.count;
  })
  return result.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
