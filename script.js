let result = document.getElementById("result");
let number = +prompt("Enter number", "1");
function toBinary(n) {
  let r;
  if (typeof n == "number") {
    r = +n.toString(2);
  }
  result.innerHTML = r;
}
toBinary(number);
