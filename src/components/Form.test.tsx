import { render, screen } from "@testing-library/react";
import React  from "react";
import Form from "./Form";

// Jest

test('when input is empty, new participants can not be added', () => {
    render(<Form />);

    // find DOM on input 
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    // find the button
    const button = screen.getByRole('button');

    // check if input is on the document
    expect(input).toBeInTheDocument();
    // check if button is disabled
    expect(button).toBeDisabled();
})