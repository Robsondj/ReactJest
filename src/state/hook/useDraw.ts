import { useSetRecoilState } from "recoil";
import { drawResult } from "../atom";
import { makeDraw } from "../../pages/Draw/makeDraw";
import { useListOfParticipants } from "./useListOfParticipants";

export const useDraw = () => {
    const participants = useListOfParticipants();
    const setResult = useSetRecoilState(drawResult);
    return () => {
       const result = makeDraw(participants);
        setResult(result);   
    }
}