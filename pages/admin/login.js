import { useEffect, useContext } from "react";
import RouterLink from "next/link";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Stack,
  Link,
  Container,
  Typography,
  CssBaseline,
} from "@mui/material";
// components
import Hidden from "../../components/Hidden";
import { LoginForm } from "../../components/authentication/login";
import AuthSocial from "../../components/authentication/AuthSocial";
// hooks
import { eraseCookie } from "../../hooks/useCookie";
// context
import { Context } from "../../contexts/context";
// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
}));

// ----------------------------------------------------------------------

function Login() {
  const { token } = useContext(Context);
  useEffect(() => {
    console.log(token);
    return () => {};
  }, [token]);
  return (
    <>
      <CssBaseline />
      <RootStyle title='Login | Minimal-UI'>
        <Hidden width='mdDown'>
          <SectionStyle>
            <Typography variant='h3' sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src='/illustration_login.png' alt='login' />
          </SectionStyle>
        </Hidden>

        <Container maxWidth='sm'>
          <ContentStyle>
            <Stack sx={{ mb: 5 }}>
              <Typography variant='h4' gutterBottom>
                Sign in to Minimal
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Enter your details below.
              </Typography>
            </Stack>
            <AuthSocial />

            <LoginForm />

            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant='subtitle2' component={RouterLink} href='/chat'>
                Get started
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
export default Login;
