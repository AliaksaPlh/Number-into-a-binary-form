let result = document.getElementById("result");
let number = +prompt("Enter number", "1");
function toBinary(n) {
  let r;
  if (isNaN(n)) {
    return toBinary(+prompt("Enter only digits", "1"));
  } else if (typeof n == "number") {
    r = +n.toString(2);
  }
  result.innerHTML = r;
}
toBinary(number);
