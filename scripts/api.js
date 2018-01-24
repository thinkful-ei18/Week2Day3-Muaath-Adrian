/* global shoppingList, store, api */

'use strict';

const api = (function () {
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
      success: (apiResponse) => {
        callback(apiResponse);
      }
    });
    console.log(`Added ${newItem} to database!`);
    // shoppingList.render();


  }
  return {
    getItems,
    createItem
  };
}());