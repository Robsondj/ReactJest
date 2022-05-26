import { atom } from "recoil";

export const listParticipantsState  = atom<string[]>({
    key: "listParticipantsState",
    default: []
});

export const errorState = atom<string>({
    key: "errorState",
    default: ""
}); 

export const drawResult = atom<Map<string, string>>({
    key: 'drawResult',
    default: new Map()
});