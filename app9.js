exports.sa= sumAll = (... args) => {
   var total=0;
   for (var i=0; i< args.length; i++) 
   
   		total+= args[i];

   	return(total); 
}
console.log(sumAll(3,5,3,5,3,2,6));   
   


