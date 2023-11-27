import * as React from "react";
import {AppBar} from "@mui/material/";
function Home (){
    return (
        <div className="container">
           <AppBar position="static" style={{background:"transparent" , boxShadow:"none"}}>
           <div className="logo" style={{color:'#0f9ffa',fontSize:"2rem"}}>Expense</div>
           {/* <Button>Login/Sign up</Button> */}
           </AppBar> 
        </div>
    );
}

export default Home;