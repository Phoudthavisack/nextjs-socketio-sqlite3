import { useEffect, useState } from "react";
// material
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
// --------------------------------- //
export default function Home() {
  const [ddata, setDdata] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const url = "/api/hello";
      const res = await fetch(url);
      const data = await res.json();
      console.log("first");
      return setDdata(data);
    };
    // fetchData();
    return () => {
      fetchData();
    };
  }, []);
  return (
    <div>
      <Typography>tes</Typography>
      <Dive>{ddata?.name}</Dive>
      <img src='https://api.lorem.space/image/game?w=150&h=220' alt='' />
    </div>
  );
}

const Dive = styled(Box)(({ theme }) => ({
  fontSize: 40,
  fontWeight: "bold",
  width: 400,
  height: 400,
  backgroundImage: "url(https://api.lorem.space/image/game?w=150&h=220)",
}));
