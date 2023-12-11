import http from 'http';


export const Cookie: React.FC = () =>{
const server = http.createServer();
server.on('request', (req:http.IncomingMessage, res:http.ServerResponse) => {
    res.writeHead(200, {'Set-Cookie': 'myCookie=hogehoge;'});
    res.end('200 OK\n');
    
});
return ("ok");
};