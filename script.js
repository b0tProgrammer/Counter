let val = document.getElementById("count");
document.getElementById("increase").onclick = function() {
    val.innerHTML = parseInt(val.innerHTML) + 1;
}
document.getElementById("decrease").onclick = function() {
    val.innerHTML = parseInt(val.innerHTML) - 1;
}
document.getElementById("reset").onclick = function() {
    val.innerHTML = 0;
}