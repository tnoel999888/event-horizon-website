import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Renders expected content", () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName("header").length).toBe(1);
  expect(container.getElementsByClassName("app__page").length).toBe(1);
  expect(container.getElementsByClassName("footer").length).toBe(1);
});
