import { makeDraw } from "./makeDraw";

describe("when doing a draw", () => {

    const participants = [
        "Robson",
        "Jesus",
        "Gonçalves",
        "Silva",
        "Izabella",
        "Olívia"
    ];

    test("each participant has a secret friend", () => {
        
        const result = makeDraw(participants);
        participants.forEach(participant => {
            expect(result.get(participant)).not.toBeUndefined();
        });
    })

    test("each participant can not get their own name", () => {

        const result = makeDraw(participants);
        participants.forEach(participant => {
            expect(result.get(participant)).not.toEqual(participant);
        });
    });
});