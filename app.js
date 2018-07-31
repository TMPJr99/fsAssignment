var fs = require('fs');

fs.readFileSync("./challenge1/info.txt", "utf8", (err, data) => {
  if(err){
    throw err;
  }
  console.log(data);
})


fs.appendFileSync('./challenge2/info.txt', 'I worked alone on this.');


fs.renameSync("./challenge3/binfo.txt", "info.txt");


fs.mkdirSync("./challenge4/copyfolder");
var data = fs.readFileSync("./challenge4/info.txt", "utf8");
fs.writeFileSync("./challenge4/copyfolder/info.txt", data);


var str = fs.readFileSync("./challenge5/info.txt", "utf8");
str1 = str.replace(/-/g, " ")
fs.writeFileSync("./challenge5/info.txt" , str1)


var ls = fs.readdirSync("./challenge6");
for(let i = 0; i < ls.length; i++){
  if(ls[i].substr(ls[i].length - 4) === ".txt"){
    console.log(ls[i])
  }
}
