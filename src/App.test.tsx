import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("render TEST text", () => {
  render(<App />);
  const linkElement = screen.getByText(/TEST/i);
  expect(linkElement).toBeInTheDocument();
});
