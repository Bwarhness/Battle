let udpDiscorver = require('./server-core/udp-discovery')
let socket = require('./server-core/socket')


// ======
// SOCKET IO
// ======
socket.initSocket();
// ======
// Announce our own service
// ======
udpDiscorver.annouceService();


// ======
// TEST CODE
// ======


