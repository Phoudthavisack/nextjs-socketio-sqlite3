import { BsFacebook, BsTwitter, BsGoogle } from "react-icons/bs";
// material
import { Stack, Button, Divider, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function AuthSocial() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <BsGoogle style={{ color: "#DF3E30", height: 24 }} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <BsFacebook style={{ color: "#1877f2", height: 24 }} />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <BsTwitter style={{ color: "#1c9cea", height: 24 }} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
