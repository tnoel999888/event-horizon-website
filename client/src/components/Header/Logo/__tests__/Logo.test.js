import React from "react";
import { render } from "@testing-library/react";
import Logo from "../Logo";

test("Renders expected content", () => {
  const { container } = render(<Logo />);
  expect(container.getElementsByClassName("logo__img").length).toBe(1);
});
