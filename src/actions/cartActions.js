"use strict"

export function addToCart(book){
    return {
        type: 'ADD_TO_CART',
        payload: book
    }
}

export function updateCart(book){
    return {
        type: 'UPDATE_CART',
        payload: book
    }
}

export function deleteItem(book){
    return {
        type: 'DELETE_CART_ITEM',
        payload: book
    }
}