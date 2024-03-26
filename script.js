document.getElementById("openBtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("submitBtn").addEventListener("click", function () {
  var cardName = document.getElementById('cardName').value.trim();
  var quantity = parseInt(document.getElementById('quantity').value);

  if(cardName === '' || isNaN(quantity) || quantity <= 0){
    alert('Please enter a valid card name and quantity.');
    return;
  }

  var table = document.getElementById('inventoryBody');
  var rows = document.getElementsByTagName('tr');

  // check for existing card
  for (let i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName('td');
    if (cells.length > 0 && cells[0].textContent === cardName) {
      var currentQuantity = parseInt(cells[1].textContent);
      cells[1].textContent = currentQuantity + quantity;
      document.getElementById('popup').style.display = 'none';
      document.getElementById('cardName').value = '';
      document.getElementById('quantity').value = '';
      return;
    }
  }

  // card does not exist, create new one
  var newRow = table.insertRow();
  var nameCell = newRow.insertCell(0);
  var quantityCell = newRow.insertCell(1);

  nameCell.textContent = cardName;
  quantityCell.textContent = quantity;

  document.getElementById('popup').style.display = 'none';
  document.getElementById('cardName').value = '';
  document.getElementById('quantity').value = '';

});
