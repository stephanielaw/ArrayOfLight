function arrayOfLight(n){
  var arr = Array(n);
  for (var i = 0; i < n; i++) {
    arr[i] = i+1;
  };
  return arr;
};

console.log(arrayOfLight(10)); 

