import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("Renders expected content", () => {
  const { container } = render(<Footer />);
  expect(container.getElementsByClassName("footer__instagram").length).toBe(1);
  expect(container.getElementsByClassName("footer__facebook").length).toBe(1);
  expect(container.getElementsByClassName("footer__twitter").length).toBe(1);
  expect(container.getElementsByClassName("footer__soundcloud").length).toBe(1);
  expect(container.getElementsByClassName("footer__spotify").length).toBe(1);
});
