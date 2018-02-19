var fs = require('fs');

try{
  var data = fs.readFileSync('textfile.txt','utf-8');
  console.log(data);
}
catch(e){
  console.log(e);
}


try{
  fs.writeFileSync('qwer.txt','Hello World','utf-8');
  console.log('FILE WRITE COMPLETE');
}
catch(e){
  console.log(e);
}
