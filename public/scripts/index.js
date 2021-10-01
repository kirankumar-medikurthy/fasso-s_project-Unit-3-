var open = document.getElementById("login")
var opens = document.getElementById("reg")
var close = document.getElementById("body")
// console.log(close)
// console.log(open)
open.addEventListener("click", function () {
  document.getElementById("containers2").style.display = "none"
  document.body.classList.add("popup-active");
})
