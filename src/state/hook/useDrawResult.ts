import { useRecoilValue } from "recoil";
import { drawResult } from "../atom";

export const useDrawResult = () => {
    return useRecoilValue(drawResult);
}