import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListOfParticipants } from "../state/hook/useListOfParticipants";
import ParticipantsList from "./ParticipantsList";

jest.mock('../state/hook/useListOfParticipants', () => {
    return {
        useListOfParticipants: jest.fn()
    }
});

describe('participants list empty', () => {
    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue([])
    })
    test('must be render without elements', () => {
        render(<RecoilRoot>
            <ParticipantsList />
        </RecoilRoot>)
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})

describe('participants list filled', () => {
    const participants = ['Robson', 'Jesus']
    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue(participants)
    })
    test('must be render with elements', () => {
        render(<RecoilRoot>
            <ParticipantsList />
        </RecoilRoot>)
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participants.length)
    })
})