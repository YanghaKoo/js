console.time('alpha');

var output = 1;
for (var i; i<=10; i++){
  output *=i;
}
console.log('Result : ', output);
console.timeEnd('alpha');
