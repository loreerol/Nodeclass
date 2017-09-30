//const addd = Array.from(process.argv);
//
//addd.splice(0, 2);
//
//var total = 0;
//addd.forEach((add) => {
//   total = total + add; 
//});
//console.log(total)

Const args = array.from(process.argv); 
//create a total to start from
Let total = 0;
args.splice(0, 2);
args.forEach((arg) => {
//as we iterate from each argument, add it to our total
Total = total + parseInt(arg);
});
console.log(total);

//not working, fix

