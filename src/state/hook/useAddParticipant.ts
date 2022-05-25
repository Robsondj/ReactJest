import { useRecoilValue, useSetRecoilState } from "recoil";
import { listParticipantsState, errorState } from "../atom";

export const useAddParticipant = () => {
    const setList = useSetRecoilState(listParticipantsState);
    const list = useRecoilValue(listParticipantsState);
    const setError = useSetRecoilState(errorState);

    return (participantName: string) => {
        if (list.includes(participantName)) {
            setError("Nomes duplicados não são permitidos!");
            setTimeout(() => {
                setError("");
            }, 500);
            return;
        }
        return setList(currentList => [...currentList, participantName]);
    }
}