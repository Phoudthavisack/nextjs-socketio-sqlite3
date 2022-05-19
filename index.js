const express = require("express");
const nextjs = require("next");
const socketio = require("socket.io");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = nextjs({ dev });
const handle = app.getRequestHandler();
// socket
const chat = require("./socket/chat");

// ---------------------------- //
app.prepare().then(() => {
  const app = express();

  app.all("*", (req, res, next) => {
    return handle(req, res, next);
  });

  const server = app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

  // set
  const io = socketio(server);

  io.of("/socket/chat").on("connection", (socket) => {
    //   socket.join("room1");
    //   console.log(socket.rooms);
    socket.on("chat", (msg) => {
      socket.broadcast.emit("chat", msg);
      io.of("/socket/admin").emit("chat", msg);
      // socket.to("room1").emit("chat", msg);
      // console.log(msg);
      return true;
    });
  });

  // admin
  const isValidJwt = (header) => {
    if (typeof header === "undefined") return false;
    const token = header.split(" ")[1];
    if (token === "abc") {
      return true;
    } else {
      return false;
    }
  };
  io.of("/socket/admin").on("connection", (socket) => {
    const header = socket.handshake.headers["authorization"];
    if (!isValidJwt(header)) return socket.disconnect(true);
    // socket.join("room1");
    // console.log(socket.rooms);
    socket.on("chat", (msg) => {
      io.of("/socket/chat").emit("chat", msg);
      return true;
    });
    io.of("/socket/chat").emit("chat", "admin connect");
  });
});
