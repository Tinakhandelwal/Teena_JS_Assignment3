/* sum of elements without passing arguments*/
function sum(){
  var sum =0; 
  for(var i=0;i<arguments.length;i++){
     sum += arguments[i];
  }
   return sum;
}
 var X = sum(1,2,3);
 console.log("sum of elements......")
 console.log(X);
