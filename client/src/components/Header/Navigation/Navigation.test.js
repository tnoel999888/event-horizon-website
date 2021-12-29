import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";
import { navigationItemsLabels, navigationItemsUrls } from "./consts";

test("Renders expected content on Home page", () => {
  const { container } = render(
    <MemoryRouter initialEntries={[navigationItemsUrls.HOME]}>
      <Navigation />
    </MemoryRouter>,
  );
  expect(container.getElementsByClassName("navigation").length).toBe(1);

  const homeNavItem = screen.getByText(navigationItemsLabels.HOME);
  expect(homeNavItem.className).toBe("navigation__item active");

  const newsNavItem = screen.getByText(navigationItemsLabels.NEWS);
  expect(newsNavItem.className).toBe("navigation__item");

  const musicNavItem = screen.getByText(navigationItemsLabels.MUSIC);
  expect(musicNavItem.className).toBe("navigation__item");

  const contactNavItem = screen.getByText(navigationItemsLabels.CONTACT);
  expect(contactNavItem.className).toBe("navigation__item");
});

test("Renders expected content on News page", () => {
  const { container } = render(
    <MemoryRouter initialEntries={[navigationItemsUrls.NEWS]}>
      <Navigation />
    </MemoryRouter>,
  );
  expect(container.getElementsByClassName("navigation").length).toBe(1);

  const homeNavItem = screen.getByText(navigationItemsLabels.HOME);
  expect(homeNavItem.className).toBe("navigation__item");

  const newsNavItem = screen.getByText(navigationItemsLabels.NEWS);
  expect(newsNavItem.className).toBe("navigation__item active");

  const musicNavItem = screen.getByText(navigationItemsLabels.MUSIC);
  expect(musicNavItem.className).toBe("navigation__item");

  const contactNavItem = screen.getByText(navigationItemsLabels.CONTACT);
  expect(contactNavItem.className).toBe("navigation__item");
});

test("Renders expected content on Music page", () => {
  const { container } = render(
    <MemoryRouter initialEntries={[navigationItemsUrls.MUSIC]}>
      <Navigation />
    </MemoryRouter>,
  );
  expect(container.getElementsByClassName("navigation").length).toBe(1);

  const homeNavItem = screen.getByText(navigationItemsLabels.HOME);
  expect(homeNavItem.className).toBe("navigation__item");

  const newsNavItem = screen.getByText(navigationItemsLabels.NEWS);
  expect(newsNavItem.className).toBe("navigation__item");

  const musicNavItem = screen.getByText(navigationItemsLabels.MUSIC);
  expect(musicNavItem.className).toBe("navigation__item active");

  const contactNavItem = screen.getByText(navigationItemsLabels.CONTACT);
  expect(contactNavItem.className).toBe("navigation__item");
});

test("Renders expected content on Contact page", () => {
  const { container } = render(
    <MemoryRouter initialEntries={[navigationItemsUrls.CONTACT]}>
      <Navigation />
    </MemoryRouter>,
  );
  expect(container.getElementsByClassName("navigation").length).toBe(1);

  const homeNavItem = screen.getByText(navigationItemsLabels.HOME);
  expect(homeNavItem.className).toBe("navigation__item");

  const newsNavItem = screen.getByText(navigationItemsLabels.NEWS);
  expect(newsNavItem.className).toBe("navigation__item");

  const musicNavItem = screen.getByText(navigationItemsLabels.MUSIC);
  expect(musicNavItem.className).toBe("navigation__item");

  const contactNavItem = screen.getByText(navigationItemsLabels.CONTACT);
  expect(contactNavItem.className).toBe("navigation__item active");
});
