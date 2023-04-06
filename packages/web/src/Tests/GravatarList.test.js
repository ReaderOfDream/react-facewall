import React from "react";
import { render } from "@testing-library/react";
import GravatarList from "../Components/GravatarList";

describe("GravatarList", () => {
  it("renders given amount of images", () => {
    const images = Array.from(Array(50).keys()).map((_,index) => ({ id: index }) )
    const { getAllByAltText } = render(<GravatarList images={images} />);
    const imgElements = getAllByAltText(/gravatar/i);
    expect(imgElements.length).toEqual(50);
  });
});
