import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Config from "./Config";

// variable names prefixed with `mock` because of unitialized mock variables
// with this prefix is allowed
const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
});

describe("the config page", () => {
    test('must be rendered correctly', () => {
        const { container } = render(<RecoilRoot>
            <Config />
        </RecoilRoot>);

        expect(container).toMatchSnapshot();
    });
});