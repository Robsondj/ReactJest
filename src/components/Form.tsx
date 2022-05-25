import { useRef, useState } from "react";
import { useAddParticipant } from "../state/hook/useAddParticipant";
import { useMessageError } from "../state/hook/useMessageError";

const Form = () => {
    const [name, setName] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const addParticipantToList = useAddParticipant();
    const errorMessage = useMessageError();
    const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        addParticipantToList(name);
        setName("");
        inputRef.current?.focus();

    }
    return (<form onSubmit={addParticipant}>
        <input 
            ref={inputRef}
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!name}>Adicionar</button>
        {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>)
}

export default Form;