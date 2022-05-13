const express = require("express");
const next = require("next");
const socketio = require("socket.io");

const port = parseInt(process.env.PORT, 10) || 3220;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const app = express();

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  const server = app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

  // set
  const io = socketio(server, { cors: { origin: "*" } });

  io.of("/pay").on("connection", (socket) => {
    socket.on("GET_PAYMENT_CODE", (msg) => {
      io.emit("GET_PAYMENT_CODE", msg);
      console.log(msg);
    });
  });
  io.of("/order").on("connection", (socket) => {
    socket.on("GET_PAYMENT_CODE", (msg) => {
      io.emit("GET_PAYMENT_CODE", msg);
      console.log(msg);
    });
  });
});
