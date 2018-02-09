function CurriedAdd(x){ 
	return function(y){ return x} 
};
g = CurriedAdd(2);

console.log(g(3));

