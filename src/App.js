import React from "react";
import { Avatar, Grid, Typography, Box, TextField, Button, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const wavetheme = createTheme({
  palette: {
    primary: {
      main: "#ccb172"
    },
    secondary: {
      main: "#26969e"
    }
  }
});
const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <ThemeProvider theme={wavetheme}>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 8 }}>
          <Avatar sx={{ m: 1, bgcolor: "warning.dark" }}>KM</Avatar>
          <Typography sx={{ fontFamily: "Roboto" }} component="h2" variant="h3">
            Greatest form
          </Typography>
          <Typography sx={{ color: "secondary.main" }} component="h3" variant="h4">
            Personal info
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="first_name"
                  fullWidth
                  label="First Name"
                  autoFocus
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="last_name"
                  fullWidth
                  label="Last Name"
                  autoComplete="family-name"
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField name="email" label="Email" fullWidth required></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField name="password" label="Password" required fullWidth></TextField>
              </Grid>
            </Grid>
            <Button
              sx={{ mt: 2, mb: 3, p: 2, bgcolor: "primary.main" }}
              fullWidth
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
