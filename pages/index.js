import { useEffect, useState } from "react";
import Image from "next/image";
// material
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
// --------------------------------- //
const myLoader = ({ src, width, quality }) => {
  return `https://api.lorem.space/image/${src}?w=220&h=220&q=${quality || 75}`;
};
export default function Home() {
  const [ddata, setDdata] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const url = "/api/hello";
      const res = await fetch(url);
      const data = await res.json();
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
      <div style={{ width: "500px", height: "500px", position: "relative" }}>
        <Image
          loader={myLoader}
          src='book'
          alt='Mountains'
          layout='fill'
          objectFit='cover'
        />
      </div>
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
