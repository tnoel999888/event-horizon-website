import React from "react";
import { render } from "@testing-library/react";
import Music from "../Music";

test("Renders expected content", () => {
  const { container } = render(<Music />);
  expect(container.getElementsByClassName("music__song").length).toBeGreaterThan(1);
  expect(container.getElementsByClassName("music__song-media-play-button").length).toBeGreaterThan(1);
  expect(container.getElementsByClassName("music__song-media-channel-name").length).toBeGreaterThan(1);
  expect(container.getElementsByClassName("music__song-media-song-name").length).toBeGreaterThan(1);
  expect(container.getElementsByClassName("music__soundcloud-logo").length).toBeGreaterThan(1);
  expect(container.getElementsByClassName("music__song-media-img").length).toBeGreaterThan(1);
  expect(container.getElementsByClassName("music__artist-and-song-name").length).toBeGreaterThan(1);
});
