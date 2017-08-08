const fs = require('fs');


//var readme = fs.readFileSync('./readable.txt','utf8');
//fs.writeFileSync('./writeMe.txt',readme);
fs.readFile('./readable.txt','utf8',function(err,data){
  console.log(data)
})
