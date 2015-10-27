/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
  setTimeout(hideSplash, 1500);
});

function hideSplash() {
  $.mobile.changePage("#login", "flow");
}

