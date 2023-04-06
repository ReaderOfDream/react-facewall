import React from "react";
import { render } from "@testing-library/react";
import Header from "../Components/Header";

describe("Header", () => {
  it("should be presented", () => {
    
    // act
    render(<Header />);

    //assert
    const headerElement = document.getElementsByTagName("header")[0];
    expect(headerElement).toBeInTheDocument();
  });

  it("should have a text", () => {
    const { getByText } = render(<Header>Foo</Header>);
    const headerElement = getByText(/foo/i);
    expect(headerElement).toBeInTheDocument();
  });
});
