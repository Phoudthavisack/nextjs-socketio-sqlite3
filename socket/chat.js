function chat(socket) {
  //   socket.join("room1");
  //   console.log(socket.rooms);
  socket.on("chat", (msg) => {
    socket.broadcast.emit("chat", msg);
    io.of("/socket/admin").emit("chat", msg);
    // socket.to("room1").emit("chat", msg);
    // console.log(msg);
    return true;
  });
}
module.exports = chat;
