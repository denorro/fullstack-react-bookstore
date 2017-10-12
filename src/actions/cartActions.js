"use strict"

export function addToCart(book){
    return {
        type: 'ADD_TO_CART',
        payload: book
    }
}

export function updateCart(_id, unit){
    return {
        type: 'UPDATE_CART',
        _id: _id,
        unit: unit
    }
}

export function deleteItem(book){
    return {
        type: 'DELETE_CART_ITEM',
        payload: book
    }
}