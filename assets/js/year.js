var paragraph = document.getElementById("year");
var d = new Date();
var n = d.getFullYear();
var text = document.createTextNode(n);
paragraph.appendChild(text);