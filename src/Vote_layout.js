import React from "react";
import "./Vote_layout.css";

function Vote_layout({ nom, image, vote_function, nombre_vote }) {
  return (
    <div className="vote_container" onClick={vote_function}>
      <img src={image} alt={nom} className="vote_image"></img>

      <div>
        <b> Vote: {nombre_vote} </b>
      </div>
    </div>
  );
}

export default Vote_layout;
