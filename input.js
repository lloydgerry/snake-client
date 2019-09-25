let connection;
//setup input

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  connection = conn;
  return stdin;
}

const handleUserInput = function(data) {
  if (data === 'x') {
    process.exit();
  }
  if (data === 'w') {
    connection.write("Move: up");
  }
  if (data === 'd') {
    connection.write("Move: right");
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
}

module.exports = setupInput;