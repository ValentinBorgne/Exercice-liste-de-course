var shoppingList = new Array();
for (var i = 0; i < shoppingList.length; i++) {
  shoppingList[i] = shoppingList[i].toUpperCase();
}
function addItem() {
    var item = document.getElementById("val1").value
    shoppingList.push(item);
    afficherListe();
    document.getElementById("val1").value ="";
}

function showList() {
    afficherListe();
}

function removeItem(itemName) {
  var index = shoppingList.indexOf(itemName);

  if (index == -1) {
    return;
  }
  shoppingList.splice(index, 1);
  afficherListe();
}

function afficherListe() {
  console.clear();
  var divSuperList = document.getElementById('superList');
  console.log(shoppingList);
    
  if (shoppingList == '') {
      divSuperList.innerHTML = ''
  } else {
    var html = '<ul>';
    for (var i = 0; i < shoppingList.length; i++) {
      html += '<li><button title="supprimer" onClick="javascript: removeItem(\'' + shoppingList[i] +
        '\')" class="crossButton" id="' + i + '">x</button>' + shoppingList[i] + '</li>';
    };
    html += '</ul>';
    divSuperList.innerHTML = html;
  }
}


function clearList() {
  shoppingList = [];
  console.clear();
  afficherListe();
}