import shuffle from "just-shuffle";

export function makeDraw (participants: string[]) {
    const  totalOfParticipants = participants.length
    const shuffled = shuffle(participants);
    const result = new Map<string, string>();
    for (let index = 0; index < totalOfParticipants; index++) {    
        const friendIndex = index === (totalOfParticipants - 1) ? 0 : index + 1;
        result.set(shuffled[index], shuffled[friendIndex]);
    }
    return result;
}