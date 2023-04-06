import React from "react";
import Gravatar from "./Gravatar";

const GravatarList = ({images}) => {
  return (
    <ul style={{"listStyleType": "none"}}>
       {images.map((i) => (
          <li key={i.id}>
            <Gravatar />
          </li>))}
    </ul>)
};

export default GravatarList;

