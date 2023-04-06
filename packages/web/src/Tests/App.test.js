import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders header", () => {

    //act
    render(<App />);
    
    //assert
    const headerElement = document.getElementsByTagName("header")[0];
    expect(headerElement).toBeInTheDocument();
  });

  it("should have a direct header child", () => {

    // act
    render(<App />, { container: window.root });
    
    //assert
    expect(window.root.children[0].innerHTML).toContain("header");
  });

  it("should setup scroll listener", () => {

    // arrange
    const eventSpy = jest.spyOn(window, "addEventListener");
    
    // act
    render(<App />);
    
    // assert
    const events = eventSpy.mock.calls.filter(i => i[0] === "scroll").map(i => i[0]);
    expect(events).toContain("scroll");
    eventSpy.mockRestore();
  });

  it("should setup resize listener", () => {
    const eventSpy = jest.spyOn(window, "addEventListener");
    render(<App />);
    const events = eventSpy.mock.calls.filter(i => i[0] === "resize").map(i => i[0]);
    expect(events).toContain("resize");
    eventSpy.mockRestore();
  });

  it("reacts to scroll event", () => {
    const { getAllByAltText } = render(<App />);
    let imgElements = getAllByAltText(/gravatar/i);
    expect(imgElements.length).toEqual(187);

    window.scrollX = 100;
    window.scrollY = 900;
    fireEvent.scroll(window);

    imgElements = getAllByAltText(/gravatar/i);
    expect(imgElements.length).toEqual(372);

    window.scrollX = 0;
    window.scrollY = 0;
  });

  it("reacts to resize event", () => {
    const { getAllByAltText } = render(<App />);
    let imgElements = getAllByAltText(/gravatar/i);
    expect(imgElements.length).toEqual(187);

    const innerHeight = window.innerHeight;
    window.innerHeight = 1280;
    fireEvent(window, new Event("resize"));

    imgElements = getAllByAltText(/gravatar/i);
    expect(imgElements.length).toEqual(275);

    window.innerHeight = innerHeight;
  });
});
