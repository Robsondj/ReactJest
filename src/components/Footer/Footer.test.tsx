import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListOfParticipants } from "../../state/hook/useListOfParticipants";
import Footer from ".";

jest.mock("../../state/hook/useListOfParticipants", () => {
    return {
        useListOfParticipants: jest.fn()
    }
});

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
});

describe('when do not have enough participants', () => {
    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue([]);
    });
    test('the game can not be started', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });
});

describe('when there are enough participants', () => {
    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue(['Robson', 'Jesus', 'Silva']);
    });
    test('the game can be started', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>);
        const button = screen.getByRole('button');
        expect(button).not.toBeDisabled();
    });
    test('the game was started', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>);
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockNavigation).toHaveBeenCalledTimes(1);
        expect(mockNavigation).toHaveBeenCalledWith('/sorteio');
    });
});