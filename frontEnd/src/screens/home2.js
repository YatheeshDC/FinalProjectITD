import React from "react";
import BasicExample from "../components/navbar";
import More from "../components/more";
import FooterSecond from "../components/secondFooter";
import Nav2 from "../components/navbar2";
import MoreDetails from "../components/more_detail";

const Home2=()=>{
    return(
        <div>
            <BasicExample/>
            <Nav2/>
            <More/>
            <MoreDetails/>
            <FooterSecond/>
        </div>
    )
}
export default Home2