import { useRecoilValue } from "recoil";
import { errorState } from "../atom";

export const useMessageError = () => {
    const message = useRecoilValue(errorState);
    return message;
}