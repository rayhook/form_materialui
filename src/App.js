import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 8 }}>
      <Typography component="h2" variant="h3">
        Greatest form
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
            <TextField required name="last_name" fullWidth label="Last Name"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField name="email" label="Email" fullWidth required></TextField>
          </Grid>
        </Grid>
        <Button sx={{ mt: 2, mb: 3 }} fullWidth variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default App;
