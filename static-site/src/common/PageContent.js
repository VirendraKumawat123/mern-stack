import React from "react";

const PageContent = (props) =>{

    return(
        <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col">
           <h1>This is {props.name} page</h1>
           <div>{props.content} {localStorage.getItem("token")}</div>
          </div>
          <div class="col">
            <img src={props.imgSrc} alt="Girl in a jacket" width="500" height="600" />
          </div>
        </div>
      </div>
    );
}

export default PageContent;