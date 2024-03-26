document.getElementById("openBtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("submitBtn").addEventListener("click", function () {
  var text = document.getElementById("textInput").value;
  if (text.trim() !== "") {
    var newItem = document.createElement("p");
    newItem.textContent = text;
    document.getElementById("mainContent").appendChild(newItem);
    document.getElementById("popup").style.display = "none";
    document.getElementById("textInput").value = "";
  } else {
    alert("Please enter some text!");
  }
});
