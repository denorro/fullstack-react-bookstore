"use strict"
//BOOKS REDUCERS
let defaultBooks = [
  {
    _id: 1,
    title: 'Book 1',
    description: 'Book 1 Description',
    price: 19.99
  },
  {
      _id: 2,
      title: 'Book 2',
      description: 'Book 2 Description',
      price: 29.99  
  },
  {
    _id: 3,
    title: 'Book 3',
    description: 'Book 3 Description',
    price: 39.99
  },
  {
      _id: 4,
      title: 'Book 4',
      description: 'Book 4 Description',
      price: 49.99  
  },
  {
    _id: 5,
    title: 'Book 5',
    description: 'Book 5 Description',
    price: 59.99
  },
  {
      _id: 6,
      title: 'Book 6',
      description: 'Book 6 Description',
      price: 69.99  
  }
];
export function booksReducers(state = { books: defaultBooks }, action){
  
  switch(action.type){
    case "GET_BOOKS":
        return {...state, books:[...state.books]}
        break;
    case "POST_BOOK":
        return {...state, books:[...state.books, ...action.payload], msg:'Saved! Click to continue', style:'success', validation:'success'}
        break;
    case "POST_BOOK_REJECTED":
        return {...state, msg:'Please, try again', style:'danger', validation:'error'}
        break;
    case "RESET_BUTTON":
        return {...state, msg:null, style:'primary', validation:null}
        break;
    case "DELETE_BOOK":
        // Create a copy of the current array of books
        const currentBookToDelete = [...state.books];
        // Determine at which index in books array is the book to be deleted
        const indexToDelete = currentBookToDelete.findIndex(function(book){
          return book._id === action.payload._id;
        });
        //use slice to remove the book at the specified index
        return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
        break;

    case "UPDATE_BOOK":
        // Create a copy of the current array of books
        const currentBookToUpdate = [...state.books]
        // Determine at which index in books array is the book to be deleted
        const indexToUpdate = currentBookToUpdate.findIndex(
          function(book){
            return book._id === action.payload._id;
          }
        )
        // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methos too
        const newBookToUpdate = {
          ...currentBookToUpdate[indexToUpdate],
          title: action.payload.title
        }
        // This Log has the purpose to show you how newBookToUpdate looks like
        console.log("what is it newBookToUpdate", newBookToUpdate);
        //use slice to remove the book at the specified index, replace with the new object and concatenate witht he rest of items in the array
        return {
          books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]
        }
        break;
        default:
        break;
  }
  return state
}
