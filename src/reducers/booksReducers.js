"use strict"
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

    case "POST_BOOK":
        return {...state, books:[...state.books, ...action.payload], msg:'Saved! Click to continue', style:'success', validation:'success'}

    case "POST_BOOK_REJECTED":
        return {...state, msg:'Please, try again', style:'danger', validation:'error'}

    case "RESET_BUTTON":
        return {...state, msg:null, style:'primary', validation:null}

    case "DELETE_BOOK":
        const bookId = action.payload;
        return { ...state, books: state.books.filter(book => book._id !== bookId) }

    case "UPDATE_BOOK":
        const currentBookToUpdate = [...state.books]
        const indexToUpdate = currentBookToUpdate.findIndex(
          function(book){
            return book._id === action.payload._id;
          }
        )
        const newBookToUpdate = {
          ...currentBookToUpdate[indexToUpdate],
          title: action.payload.title
        }
        return {
          books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]
        }
        break;
        default:
        break;
  }
  return state
}
