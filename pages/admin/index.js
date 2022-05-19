import React, { useEffect } from "react";
// socket
import { io } from "socket.io-client";
const socket = io("/socket/chat");
// database
const db = require("../../db");
async function db_all(query) {
  return new Promise(function (resolve, reject) {
    db.all(query, function (err, rows) {
      if (err) {
        return reject(err.message);
      }
      resolve(rows);
    });
  });
}
// material
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// -------------------------------------------- //
export default function Admin({ data }) {
  // useEffect(() => {}, []);
  return <div>{JSON.stringify(data && data)}</div>;
}
export async function getServerSideProps(context) {
  const sql = `SELECT * From admin_user`;
  const data = await db_all(sql);
  return {
    props: { data },
  };
}
