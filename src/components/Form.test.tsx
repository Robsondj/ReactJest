import { act, fireEvent, render, screen } from "@testing-library/react";
import React  from "react";
import { RecoilRoot } from "recoil";
import Form from "./Form";

// Jest

describe("Form Group Test", () => {
    test("when input is empty, new participants can not be added", () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>);
    
        // find DOM on input 
        const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
    
        // find the button
        const button = screen.getByRole("button");
    
        // check if input is on the document
        expect(input).toBeInTheDocument();
        // check if button is disabled
        expect(button).toBeDisabled();
    });

    test("Add participant in case of fill the input", () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>);
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const button = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: 'Robson de Jesus'
            }
        });
    
        fireEvent.click(button);
    
        expect(input).toHaveFocus();
        expect(input).toHaveValue("");
    });

    test("duplicated names can not be added to the list", () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const button = screen.getByRole('button');
        fireEvent.change(input, {
            target: {
                value: 'Robson de Jesus'
            }
        });
        fireEvent.click(button);
        fireEvent.change(input, {
            target: {
                value: 'Robson de Jesus'
            }
        });
        fireEvent.click(button);
    
        const errorMessage = screen.getByRole('alert');
    
        expect(errorMessage.textContent).toBe('Nomes duplicados não são permitidos!');
    });

    test("the error message must disappear after a time", () => {
        jest.useFakeTimers();
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const button = screen.getByRole('button');
        fireEvent.change(input, {
            target: {
                value: 'Robson de Jesus'
            }
        });
        fireEvent.click(button);
        fireEvent.change(input, {
            target: {
                value: 'Robson de Jesus'
            }
        });
        fireEvent.click(button);

        // queryByRole does not show test error when element is not found, but getByRole does
        let mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeInTheDocument();
    
        act(() => {
            jest.runAllTimers();
        });
    
        mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeNull();
    });
});