import * as React from "react";
import AppBar from "@mui/material/AppBar";
function Home (){
    return (
        <div className="container">
           <AppBar position="static">
           <div className="logo">Logo</div>
              <ul className="menu">
                  <li>About us</li>
                  <li>Solutions</li>
                  <li>Pricing</li>
              </ul>
           </AppBar> 
        </div>
    );
}

export default Home;