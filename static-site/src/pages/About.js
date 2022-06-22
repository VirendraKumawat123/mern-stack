import React from "react";
import PageContent from "../common/PageContent";
import dog from "../image/dog.png";


const About = () =>{

    return(
        <>
        <PageContent name="This is a About page" imgSrc={dog} content={<><p>dasdkslkdadkasdadasdas</p> </>}/>
    </>
    )

}

export default About;