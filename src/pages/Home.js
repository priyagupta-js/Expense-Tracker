import React from "react";
import { Container } from "react-bootstrap";
import Blog from "../components/Blog";
import CustomerReview from "../components/CustomerReview";
import Footer from "../components/Footer";
// import Guide from "../components/Guide";
import Introduction from "../components/Introduction";
import UseCase from "../components/UseCase";


function Home (){
    return(
        <Container>
            <Introduction />
            <UseCase />
            {/* <Guide /> */}
            <CustomerReview />
            <Blog />
            {/* <Footer /> */}
        </Container>
    );
}

export default Home;