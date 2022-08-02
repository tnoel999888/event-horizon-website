import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import News from "../News";

const dummyGetInstaDataFunc = jest.fn();

const dummyInstaData = () => {
  const dummyMediaData = new Array(24);

  for (let i = 0; i < dummyMediaData.length; i++) {
    dummyMediaData[i] = {
      caption: "Dummy caption",
      id: "123456789",
      media_type: "CAROUSEL_ALBUM",
      media_url: "www.dummyurl.com",
      permalink: i.toString(),
    };
  }

  return dummyMediaData;
};

test("Renders images when media data NOT empty", () => {
  const { container } = render(
    <News
      mediaData={dummyInstaData()}
      getInstaData={dummyGetInstaDataFunc}
      showMoreButtonVisible
      dataLoading={false}
    />,
  );

  expect(container.getElementsByClassName("news__insta-media-container").length).toBe(24);
  expect(container.getElementsByClassName("news__loading-spinner").length).toBe(0);
  expect(container.getElementsByClassName("news__load-more-btn").length).toBe(1);
});

test("Renders no images when media data empty", () => {
  const { container } = render(
    <News
      mediaData={[]}
      getInstaData={dummyGetInstaDataFunc}
      showMoreButtonVisible={false}
      dataLoading
    />,
  );

  expect(container.getElementsByClassName("news__insta-media-container").length).toBe(0);
  expect(container.getElementsByClassName("news__loading-spinner").length).toBe(1);
  expect(container.getElementsByClassName("news__load-more-btn").length).toBe(0);
});

test("Calls getInstaData() function when Load More button clicked", () => {
  const { container } = render(
    <News
      mediaData={[]}
      getInstaData={dummyGetInstaDataFunc}
      showMoreButtonVisible
      dataLoading={false}
    />,
  );

  expect(container.getElementsByClassName("news__load-more-btn").length).toBe(1);

  const submitButtonElement = screen.getByText(/Load More/i);
  userEvent.click(submitButtonElement);

  expect(dummyGetInstaDataFunc).toHaveBeenCalled();
});
