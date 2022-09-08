var str = "Hi there , it is  DT.";

let shuffled = str.split("").sort(() => {
    return 0.5 - Math.random();
  })
  .join("");

String.prototype.shuffle = function () {
  var a = this.split(""),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
};
console.log("Hello there am Mack".shuffle());

