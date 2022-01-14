import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm/>);
  const fNameInput = screen.getByLabelText(/First Name:/i);
  const lNameInput = screen.getByLabelText(/Last Name:/i);
  const addressInput = screen.getByLabelText(/Address:/i);
  const cityInput = screen.getByLabelText(/City:/i);
  const stateInput = screen.getByLabelText(/State:/i);
  const zipInput = screen.getByLabelText(/Zip:/i);
  const button = screen.getByRole("button")

  userEvent.type(fNameInput, "Sean");
  userEvent.type(lNameInput, "van der Wal");
  userEvent.type(addressInput, "123 Main St.");
  userEvent.type(cityInput, "San Carlos");
  userEvent.type(stateInput, "CA");
  userEvent.type(zipInput, "94070");
  userEvent.click(button);

  const successMsg = await screen.findByTestId("successMessage");
  const fNameOutput = await screen.findByText(/Sean/i);
  const lNameOutput = await screen.findByText(/van der Wal/i);
  const addressOutput = await screen.findByText(/123 Main St./i);
  const cityOutput = await screen.findByText(/San Carlos/i);
  const stateOutput = await screen.findByText(/CA/i);
  const zipOutput = await screen.findByText(/94070/);

  expect(successMsg).toBeInTheDocument();
  expect(fNameOutput).toBeInTheDocument();
  expect(lNameOutput).toBeInTheDocument();
  expect(addressOutput).toBeInTheDocument();
  expect(cityOutput).toBeInTheDocument();
  expect(stateOutput).toBeInTheDocument();
  expect(zipOutput).toBeInTheDocument();
});
