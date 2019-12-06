import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";
// import App from '../App';
//https://testing-library.com/docs/dom-testing-library/cheatsheet

test("renders foul ball button without crashing", () => {
  render(<Dashboard />);
});

test("Batter Found", () => {
  const { getByText } = render(<Dashboard />);

  getByText("Batter Count");
});

test("foul ball button works", () => {
  const click = { button: 1 };

  getByText.click("Foul Ball", click);
});
