var http=require('http');
var fs=require('fs');

http.createServer(function(request,response){
var url=request.url;
switch(url){
   case '/':
    getStaticFileContent(response,'homepage.jsp','text/jsp');
    break;
   case '/RegistrationPage':
   getStaticFileContent(response,'RegistrationPage.jsp','text/jsp');
   break;
  case '/editpage':
   getStaticFileContent(response,'editpage.jsp','text/jsp');
   break;
  case '/SaveName':
	   getStaticFileContent(response,'SaveName.html','text/html');
	   break;
default:
response.writeHead(404,{'Content-Type':"text/plain"});

response.end('404 -Page not found');

}

}
).listen(9099);

console.log('server running at website at :http://localhost:9099');

function getStaticFileContent(response,filepath,contentType){
  fs.readFile(filepath,function(error,data){

      if(error){
response.writeHead(500,{'content-Type':'text/plain'});
response.end('500 - Internal server Error');

}
if(data){
response.writeHead(200,{'content-Type':'text/html'});
response.end(data);

}

  });

}