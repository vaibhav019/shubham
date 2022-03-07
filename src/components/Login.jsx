import React ,{useState,useEffect,Fragment} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
//import { ToastContainer, toast } from 'react-toastify';
import validator from 'validator'

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
      Width:1000,
      height:1000,
      marginTop:0,
      backgroundColor: 'gray'               //'linear-gradient(to bottom right, red, yellow)'

  }
};
const theme = createTheme();
export var role='';
export default function Login(props) {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const postdata=(data)=>{
    axios.post("http://localhost:8100/auth/authenticate",data).then(   //${base_url}\api\Registers
      (response)=>{
        //success
        console.log(response,"============");
        console.log(response.data)
        localStorage.setItem("authtoken",response.data)
        console.log("authtoken",localStorage.getItem("authtoken"))
        window.location = "/checklist";
        //toast.success("Login done Successfully");
        //if(response.data.isSuccess){
        //window.alert(response.data.message)
        //window.location = "/userhome";
        console.log("successs");
       // }else{
         // window.alert(response.data.message)
        //}
        
      },(error)=>{
        //error
        window.alert(error)
        console.log(error);
        console.log("failed +++++++++++++++++++")
      }
    );
  };
//   const[emailerror,setemailerror]=useState('')
  // const [passworderror,setpassworderror]=useState('');
//   const validateEmail = (e) => {
//     var email = e.target.value
  
//     if (validator.isEmail(email)) {
//       setemailerror('')
//     } else {
//       setemailerror('Enter valid Email!')
//     }
//   }
//   const validatePassword = (e) => {
//     var password=e.target.value
//     if (password.length <=8) {
//       setpassworderror('')
//     } else {
//       setpassworderror('Password should not grater the 8')
//     }
  
   
//    }
    const [login,setlogin]=useState({});
    const handleSubmit = (e) => {
      console.log(login,"+++++++++++++++++++");
    //   if(login.Email=="vaibhavsengarnetid@gmail.com" && login.Password=="12345"){
    //     console.log(login.Email)
    //     console.log(login.Password)
    //     window.alert("Login done as admin")
    //    localStorage.setItem('role','admin')
    //    window.alert("Login done as ",localStorage.getItem('role'))

    //   window.location = "/adminhome"
    //   e.preventDefault();
    //   //props.history.push("/adminhome");
    //   }else{
       postdata(login);
       e.preventDefault();
      //}
      //const data = new FormData(e.currentTarget);
      // eslint-disable-next-line no-console
      // console.log({
      //   email: data.get('email'),
      //   password: data.get('password'),
      // });
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
            backgroundColor:'aqua',
            border:1,
            borderRadius:'5%',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1,ml:2,mr:2 }}>
            <TextField
              margin="normal"
              
              fullWidth
              id="username"
              label="UserName"
              name="username"
              autoComplete="off"
              inputProps={{maxLength:100}}
              autoFocus
              onChange={(e)=>{
               // validateEmail(e)
                 setlogin({...login,username:e.target.value})
                
              }}
              required
            //   error={Boolean(emailerror)}
            //   helperText={emailerror}
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
              onChange={(e)=>{
               // validatePassword(e)
                setlogin({...login,password:e.target.value})
              }}
            //   error={Boolean(passworderror)}
            //   helperText={passworderror}
            />
            <span style={{
              fontWeight: 'bold',
              color: 'black',
            }}>* Special Characters are not allowed...</span>
            
            <Button
              type="submit"
              //fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,ml:2}}
            >
              Sign In
            </Button><Button
            type="reset"
            //fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 ,ml:2}}
            onClick={(e)=>{
              setlogin({})
            }}
          >
            Reset
          </Button>
            
          </Box>
        </Box>
        {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
      </Container>
    </ThemeProvider>
    </Paper>
    </div>
  );
}