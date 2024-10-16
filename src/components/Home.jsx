// import { useState } from "react"
import { useState } from "react";
import "./Home.css"
import { Box, FormControl, FormLabel, Grid2, InputLabel, Paper, TextField, Typography} from "@mui/material";
// import { useNavigate } from 'react-router-dom';


function Home() {
  const[username,setusername]=useState("")
  const[password,setpassword]=useState("")
  
  const[isToggeld,setisToggled]=useState(false);

  // const handletoggle=()=>{
  //   setisToggled((prev)=>!prev)
  // }
  // const correctusername= "admin";
  // const correctpassword="123456"
  // const handlesignin=()=>{
  //   if(username===correctusername && password===correctpassword){
  //     alert("login succesfull")
      
      


  // }
  // else{
  //   alert("missing credentials")
   

  // }
// }
  return (
  <Box sx={{display:"flex", flexDirection:"column", bgcolor:"#0073CE", height:"100vh", width:"24rem"}}>
    <Box sx={{position:"absolute" ,bgcolor:"white", height:"24rem",width:"22rem", marginTop:"4rem", marginLeft:".9rem", marginRight:"1rem", paddingBottom:"1.6rem"}}>


    <Typography  sx={{fontSize:"1.5rem",margin:"1.5rem 0 0 2rem",fontWeight:"bold"}} variant="h1" gutterBottom>
      Sign in
    


    </Typography>
    <Typography sx={{ fontSize:".8rem", margin:".3rem 0 0 2rem"}} variant="body1" gutterBottom>
      please enter your login credentials

    </Typography>
    <FormControl>
      <InputLabel htmlFor="username" sx={{marginLeft:"1rem", marginTop:"1rem",fontSize:".8rem", fontWeight:"bold", color:"black"}}>Username</InputLabel>
      <TextField sx={{height:"2.5rem", marginTop:"3.7rem", marginLeft:"2rem", width:"17rem", bgcolor:"#A7C0D1" }}
      id="username"
      variant="outlined"
      value={username}
      size="small"
      onChange={(e)=>setusername(e.target.value)}
      />
    </FormControl>
    <FormControl>
      <InputLabel htmlFor="password" sx={{marginLeft:"1rem", marginTop:".3rem", fontSize:".8rem" ,fontWeight:"bold", color:"black"}}>password</InputLabel>
      <TextField sx={{height:"2.5rem", marginTop:"3rem", marginLeft:"2rem", width:"17rem", bgcolor:"#A7C0D1" }}
      id="password"
      variant="outlined"
      value={password}
      size="small"
      onChange={(e)=>setpassword(e.target.value)}
      />
    </FormControl>


    </Box>
    <Box sx={{display:"flex", flexDirection:"coloumn", justifyContent:"space-between",bgcolor:"#A7C0D1", height:"18rem", marginTop:"auto"}}>
      <Box sx={{margin:"8.4rem 0 0 3rem", fontSize:".7rem"}}>
        <p>Copyright © 2024 <span  style={{color:"#0073CE"}}>Yo!Kart</span> TV-10.1.0.20240926</p>
      </Box>
    <Box sx={{ display:"flex", flexDirection:"column",bgcolor:"red"}}>
      <Typography sx={{textAlign:"center"}}>
        BOOK A DEMO
      </Typography>

    </Box>
    </Box>

  </Box>
  )
}

export default Home
