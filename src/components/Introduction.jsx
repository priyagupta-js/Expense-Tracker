
import * as React from "react";
import { Button, Typography } from "@mui/material";

function Introduction (){
    return(
        <div className="main-Intro">
        <Typography variant="h4" mt={3}>Manage your Expense<br/><span style={{color:"#0f9ffa"}}>efficiently</span></Typography>
        <Typography variant="h6" mt={1}>Plan , track , organise your expenses</Typography>
        <div class="learn-btn">
        <Button variant="contained">Learn more</Button>
        </div>
        </div>
    );
}

export default Introduction;