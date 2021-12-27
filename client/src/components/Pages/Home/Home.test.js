import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

test("Renders expected content", () => {
  const { container } = render(<Home />);
  expect(container.getElementsByClassName("home__carousel").length).toBe(1);
});
