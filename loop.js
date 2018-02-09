var foo1=  function(arg1,arg2){
	console.log('foo:'+ arg1 +arg2);

}

setTimeout(foo1,2000,'joe','tid');

var foo2= (arg1,arg2)=> {
console.log('f00:' + arg1 + arg2);

}
setTimeout(foo2,2100,'tid','tid');