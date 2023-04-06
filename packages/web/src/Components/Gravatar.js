import React from "react";

import { gravatarUrl, generateEmail } from "../utility/utils";
import { IMAGE_SIZE } from "../utility/common";

const Gravatar = () => {
  return (
    <img
      alt="Gravatar"
      src={gravatarUrl(generateEmail("gmail.com"), IMAGE_SIZE)}
      onClick={(event) => event.target.classList.toggle("is-highlighted")}
    />
  );
};

export default React.memo(Gravatar);
