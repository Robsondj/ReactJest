import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListOfParticipants } from "../../state/hook/useListOfParticipants";
import { useDrawResult } from "../../state/hook/useDrawResult";
import Draw from ".";

jest.mock('../../state/hook/useListOfParticipants', () => {
    return {
        useListOfParticipants: jest.fn()
    }
});

jest.mock('../../state/hook/useDrawResult', () => {
    return {
        useDrawResult: jest.fn()
    }
});

describe('at draw page', () => {
    const participants = [
        'Robson',
        'Jesus',
        'Silva'
    ];
    const result = new Map([
        ['Robson', 'Silva'],
        ['Silva', 'Jesus'],
        ['Jesus', 'Robson']
    ]);

    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue(participants);
        (useDrawResult as jest.Mock).mockReturnValue(result);
    });

    test('All participants can show their secrect friend', () => {
        render(<RecoilRoot>
            <Draw />
        </RecoilRoot>);

        const opcoes = screen.queryAllByRole('option');
        // length + 1 because the select has a default option
        expect(opcoes).toHaveLength(participants.length + 1);
    });

    test('the secret friend is visualized when requested', () => {
        render(<RecoilRoot>
            <Draw />
        </RecoilRoot>);

        const select = screen.getByPlaceholderText('Selecione o seu nome');
        
        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        })

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const secretFriend = screen.getByRole('alert');

        expect(secretFriend).toBeInTheDocument();

    })
})