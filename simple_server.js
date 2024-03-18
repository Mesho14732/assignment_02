//import node http module and declare variables
const http = require (`http`);
const PORT = 3000;
const HOSTNAME = `localhost`;

//create callback request handler
function requestHandler(req, res){
    console.log(req.url);
    console.log(req.method);
    if (req.method===`GET` && req.url=== `/books`){
        res.write(JSON.stringify([
            { title: `The Oldman and the Sea `},
            { title: `The Sea Crew `},
        ]));
    }
    if (req.method===`PUT` && req.url=== `/books`){
        res.write(`update book from the /books`);
    }
    else if (req.method===`DELETE`){
        res.write(`Delete book from the /books`);
    }
    else if (req.method===`GET` && req.url=== `/books/author`){
        res.write(`Get the books' authors from /books/author`);
    }
    else if (req.method===`POST` && req.url=== `/books/author`){
        res.write(`Add books' athors to /books/author`);
    }
    else if (req.method===`PUT` && req.url=== `/books/author`){
        res.write(`Update books'authors from /books/author`);
    }
    res.end();
}

//create a http server
const server = http.createServer(requestHandler);

//liten to the server on the declared port
server.listen(PORT, HOSTNAME, ()=>{
    console.log(`server is starting at http://${HOSTNAME}:${PORT}`);
});