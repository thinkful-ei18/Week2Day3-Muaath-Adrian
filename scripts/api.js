/* global shoppingList, store, api */

'use strict';

const api = (function() {
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/[Mo-Adrian]';
  
  function getItems(callback){
    $.getJSON(`${BASE_URL}/items`, callback);

  }
  
  function createItem(name, callback){
    const newItem = JSON.stringify({name:name});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });
  }
  
  function updateItem(id, updateData, callback){
    // const stringy = JSON.stringify(updateData);
    // console.log(stringy);
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });
  }
  function deleteItem(id, callback)
  {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: callback
    });
    
  }

  
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}());