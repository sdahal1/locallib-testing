const {partitionBooksByBorrowedStatus} = require("./books")

function findAccountById(accounts, id) {
  partitionBooksByBorrowedStatus()
}

function sortAccountsByLastName(accounts) {}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
