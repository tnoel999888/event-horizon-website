import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { navigationItemsUrls } from "../Navigation/consts";
import Header from "../Header";

test("Renders expected content on Home page", () => {
  const { container } = render(
    <MemoryRouter initialEntries={[navigationItemsUrls.HOME]}>
      <Header />
    </MemoryRouter>,
  );
  expect(container.getElementsByClassName("logo").length).toBe(1);
  expect(container.getElementsByClassName("navigation").length).toBe(1);
});

test("Renders expected content on News page", () => {
  const { container } = render(
    <MemoryRouter initialEntries={[navigationItemsUrls.NEWS]}>
      <Header />
    </MemoryRouter>,
  );
  expect(container.getElementsByClassName("logo").length).toBe(1);
  expect(container.getElementsByClassName("navigation").length).toBe(1);
});

test("Renders expected content on Music page", () => {
  const { container } = render(
    <MemoryRouter initialEntries={[navigationItemsUrls.MUSIC]}>
      <Header />
    </MemoryRouter>,
  );
  expect(container.getElementsByClassName("logo").length).toBe(1);
  expect(container.getElementsByClassName("navigation").length).toBe(1);
});

test("Renders expected content on Contact page", () => {
  const { container } = render(
    <MemoryRouter initialEntries={[navigationItemsUrls.CONTACT]}>
      <Header />
    </MemoryRouter>,
  );
  expect(container.getElementsByClassName("logo").length).toBe(1);
  expect(container.getElementsByClassName("navigation").length).toBe(1);
});
