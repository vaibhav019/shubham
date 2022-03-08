import React, { useState, useEffect, Fragment } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';


const styles = {
  paperContainer: {
    // backgroundImage: `url(${"https://media.istockphoto.com/photos/audit-concept-on-a-computer-display-picture-id1161029738?b=1&k=20&m=1161029738&s=170667a&w=0&h=NZLxIMG5LIZDuNcZol2XHhYMuPNKvDAgYGXWq-DjW_k="})`,
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    opacity: 1,
    content: '""',
    display: 'block',
    Width: 1000,
    height: 1000,
    marginTop: 0,
    backgroundColor: 'gray'               //'linear-gradient(to bottom right, red, yellow)'

  }
};
const theme = createTheme();

export default function Login() {
  const postdata =  (data) => {
    axios.post("http://localhost:8100/auth/authenticate", data).then(  
      (response) => {
        //success
        console.log(response, "============");
        console.log(response.data)
        localStorage.setItem("Authorization", response.data)
        console.log("Authorization", localStorage.getItem("Authorization"))
        alert("Login done")
        window.location = "/checklist";
        console.log("successs");
      }, (error) => {
        //error
        window.alert(error)
        console.log(error);
        console.log("failed +++++++++++++++++++")
      }
    );

    console.log(localStorage.getItem('Authorization'),"==================================================")
      axios.post("http://localhost:8100/auth/validate", {}, 
     {headers: {"Authorization" : `Bearer ${localStorage.getItem('Authorization')}`}}).then(
       (response) => {
         //success
         console.log(response);
          //setdata(response.data.name)
         console.log(response.data,"=============================")
         localStorage.setItem("user",response.data.name)
         console.log(localStorage.getItem("user"))
         console.log(data,"++++++++++++++++++++++++++++++")
 
       }, (error) => {
         //error
         console.log(error);
         console.log("failed +++++++++++++++++++")
       
       }
     );
  };
  const [login, setlogin] = useState({});
  const handleSubmit = (e) => {
    console.log(login, "+++++++++++++++++++");
    postdata(login);
    e.preventDefault();
  };

  return (
    <div>
      <Paper style={styles.paperContainer}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                border: 1,
                borderRadius: '5%',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, ml: 2, mr: 2 }}>
                <TextField
                  margin="normal"

                  fullWidth
                  id="username"
                  label="UserName"
                  name="username"
                  autoComplete="off"
                  inputProps={{ maxLength: 100 }}
                  autoFocus
                  onChange={(e) => {
                    setlogin({ ...login, username: e.target.value })

                  }}
                  required
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="Password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setlogin({ ...login, password: e.target.value })
                  }}
                />
                

                <Button
                  type="submit"
                  //fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ml: 2 }}
                >
                  Sign In
                </Button><Button
                  type="reset"
                  //fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ml: 2 }}
                  onClick={(e) => {
                    setlogin({})
                  }}
                >
                  Reset
                </Button>

              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Paper>
    </div>
  );
}