"use strict"

// CART REDUCERS
export function cartReducers(state={cart:[]}, action) {
  switch(action.type){
    case "GET_CART":
        return{...state,
          cart:action.payload,
          totalAmount:totals(action.payload).amount,
          totalQty: totals(action.payload).qty
        }
        break;
    case "ADD_TO_CART":
        return {cart: [...state, ...action.payload]}
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
          cart: updatedCart
          //totalAmount: totals(action.payload).amount,
          //totalQty: totals(action.payload).qty
        }
        break;
    case "DELETE_CART_ITEM":
    return {...state,
      cart:action.payload,
      totalAmount: totals(action.payload).amount,
      totalQty: totals(action.payload).qty
    }
    break;
  }
  return state
}

// CALCULATE TOTALS
export function totals(payloadArr){

  const totalAmount = payloadArr.map(function(cartArr){
    return cartArr.price * cartArr.quantity;
  }).reduce(function(a, b) {
    return a + b;
  }, 0); //start summing from index0


  const totalQty = payloadArr.map(function(qty){
    return qty.quantity;
  }).reduce(function(a, b) {
    return a + b;
  }, 0);

  return {amount:totalAmount.toFixed(2), qty:totalQty}
}
