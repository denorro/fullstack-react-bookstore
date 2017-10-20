"use strict"

// CART REDUCERS
export function cartReducers(state={cart:[]}, action) {
  switch(action.type){
    case "GET_CART":
        return{...state,
          cart:action.payload,
          totalAmount:totals(action.payload).price,
          totalQty: totals(action.payload).qty
        }
        break;
    case "ADD_TO_CART":
        return {
          ...state, 
          cart: action.payload,
          totalAmount:totals(action.payload).price,
          totalQty: totals(action.payload).qty,
          msg: `${action.payload[action.payload.length - 1].title} was added to your shopping cart!`
        }
        break;
    case "UPDATE_CART":
        const currentCartItems = [...state.cart];
        const index = currentCartItems.findIndex(function(cartItem){
          return cartItem._id == action._id;
        });
        const cartItemToUpdate = {
          ...currentCartItems[index],
          qty: currentCartItems[index].qty + action.unit
        }

        let updatedCart = [
          ...currentCartItems.slice(0, index), cartItemToUpdate, ...currentCartItems.slice(index + 1)
        ];

        return {
          ...state,
          cart: updatedCart,
          totalAmount: totals(updatedCart).price,
          totalQty: totals(updatedCart).qty,
          msg: `${cartItemToUpdate.title} was updated in your shopping cart!`
        }
        break;
    case "DELETE_CART_ITEM":
    return {...state,
      cart:action.payload,
      totalAmount: totals(action.payload).price,
      totalQty: totals(action.payload).qty
    }
    break;
  }
  return state
}

// CALCULATE TOTALS
export function totals(payloadArr){

  const totalAmount = payloadArr.map(function(cartArr){
    return cartArr.price * cartArr.qty;
  }).reduce(function(a, b) {
    return a + b;
  }, 0);

  const totalQty = payloadArr.map(function(qty){
    return qty.qty;
  }).reduce(function(a, b) {
    return a + b;
  }, 0);

  return {price:totalAmount.toFixed(2), qty:totalQty}
}
