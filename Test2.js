var id= setInterval(()=> console.log('foo'),2000);
setTimeout(()=> clearInterval(id),2000*19 );