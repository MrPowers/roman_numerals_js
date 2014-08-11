romanToNumber = function (roman) {
  var mapping = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
  }

  var arr = roman.split("");
  return _.inject(arr, function(memo, letter, i) {
    var num = mapping[letter];
    var next = mapping[arr[i + 1]];
    if (next === undefined || next <= num) {
      return memo + num;
    } else {
      return memo - num;
    }
  }, 0);
};


numberToRoman = function (number) {
  var mapping = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  }

  var result = [];
  var keys = _.keys(mapping).reverse();
  _.each(keys, function(k) {
    var div = Math.floor(number / k);
    var mod = number % k;
    _(div).times(function() {
      result.push(mapping[k]);
    });
    number = mod;
  });
  return result.join("");
}

