console.log(" 1 HelloWorld");

var foo = function() {
	console.log('- foo');
}

setTimeout(foo, 2000);// milli sec
console.log('2 Hello');


setTimeout(() => console.log('foo'), 2000);
console.log('Hello');


