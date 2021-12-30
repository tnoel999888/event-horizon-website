import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../Contact";

test("Renders expected content", () => {
  const { container } = render(<Contact />);
  expect(container.getElementsByClassName("contact__press-shot-2").length).toBe(1);
  expect(container.getElementsByClassName("contact__title-and-email").length).toBe(1);
  expect(container.getElementsByClassName("contact__form-instruction").length).toBe(1);
  expect(container.getElementsByClassName("form-group").length).toBe(3);
  expect(container.getElementsByClassName("btn btn-primary").length).toBe(1);
});

test("Submit button disabled by default", () => {
  render(<Contact />);

  const submitButtonElement = screen.getByText(/submit/i);
  expect(submitButtonElement).toBeInTheDocument();
  expect(submitButtonElement).toBeDisabled();
});

test("Submit button disabled when Name is INVALID", () => {
  render(<Contact />);

  const nameInput = screen.getByTestId("name-input");
  userEvent.type(nameInput, "");

  const emailInput = screen.getByTestId("email-address-input");
  userEvent.type(emailInput, "tnoel7@msn.com");

  const messageInput = screen.getByTestId("message-input");
  userEvent.type(messageInput, "Hello World");

  const submitButtonElement = screen.getByText(/submit/i);
  expect(submitButtonElement).toBeInTheDocument();
  expect(submitButtonElement).toBeDisabled();
});

test("Submit button disabled when Email Address is INVALID", () => {
  render(<Contact />);

  const nameInput = screen.getByTestId("name-input");
  userEvent.type(nameInput, "Timan Noel");

  const emailInput = screen.getByTestId("email-address-input");
  userEvent.type(emailInput, "invalid-email");

  const messageInput = screen.getByTestId("message-input");
  userEvent.type(messageInput, "Hello World");

  const submitButtonElement = screen.getByText(/submit/i);
  expect(submitButtonElement).toBeInTheDocument();
  expect(submitButtonElement).toBeDisabled();
});

test("Submit button disabled when Message is INVALID", () => {
  render(<Contact />);

  const nameInput = screen.getByTestId("name-input");
  userEvent.type(nameInput, "Timan Noel");

  const emailInput = screen.getByTestId("email-address-input");
  userEvent.type(emailInput, "tnoel7@msn.com");

  const messageInput = screen.getByTestId("message-input");
  userEvent.type(messageInput, "");

  const submitButtonElement = screen.getByText(/submit/i);
  expect(submitButtonElement).toBeInTheDocument();
  expect(submitButtonElement).toBeDisabled();
});

test("Submit button NOT disabled when Name, Email Address and Message are all VALID", () => {
  render(<Contact />);

  const nameInput = screen.getByTestId("name-input");
  userEvent.type(nameInput, "Timan Noel");

  const emailInput = screen.getByTestId("email-address-input");
  userEvent.type(emailInput, "tnoel7@msn.com");

  const messageInput = screen.getByTestId("message-input");
  userEvent.type(messageInput, "Hello World");

  const submitButtonElement = screen.getByText(/submit/i);
  expect(submitButtonElement).toBeInTheDocument();
  expect(submitButtonElement).not.toBeDisabled();
});

test("Submit button should disappear when Name, Email Address and Message are all VALID and form is SUBMITTED", () => {
  render(<Contact />);

  const nameInput = screen.getByTestId("name-input");
  userEvent.type(nameInput, "Timan Noel");

  const emailInput = screen.getByTestId("email-address-input");
  userEvent.type(emailInput, "tnoel7@msn.com");

  const messageInput = screen.getByTestId("message-input");
  userEvent.type(messageInput, "Hello World");

  const submitButtonElement = screen.getByText(/submit/i);

  expect(submitButtonElement).toBeInTheDocument();
  expect(submitButtonElement).not.toBeDisabled();

  userEvent.click(submitButtonElement);

  expect(submitButtonElement).not.toBeInTheDocument();
});
