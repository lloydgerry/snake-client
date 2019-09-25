const net = require('net');


/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.43.245',
    port: 50541
  });
  console.log('Connected to snake server')
  conn.on('connect', () => {
    conn.write('Name: LG');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  return conn;
} 

module.exports = connect;