import React, { useState, useEffect } from "react";
// material
import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
// socket.io
import { io } from "socket.io-client";
const key = {
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: "Bearer abc",
      },
    },
  },
};
const socket = io("/socket/admin", key);

// ------------------------ //
export default function Chat() {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!socket) return;
    socket.on("chat", (msg) => {
      return setData((prev) => [msg, ...prev]);
    });
    return () => {};
  }, []);
  return (
    <RootStyle>
      <Card sx={{ p: 1, minHeight: 300, minWidth: 300 }}>
        {data.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </Card>
    </RootStyle>
  );
}

const RootStyle = styled(Box)(({ theme }) => ({
  backgroundColor: "#eee",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
