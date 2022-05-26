import { useState } from "react";
import Card from "../../components/Card";
import { useListOfParticipants } from "../../state/hook/useListOfParticipants";
import { useDrawResult } from "../../state/hook/useDrawResult";

import "./styles.css";

const Draw = () => {

    const participants = useListOfParticipants();

    const [selectedParticipant, setSelectedParticipant] = useState("");
    const [secretFriend, setSecretFriend] = useState("");

    const result = useDrawResult();

    const executeDraw = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (result.has(selectedParticipant)) {
            setSecretFriend(result.get(selectedParticipant)!);
        }
    }

    return (<Card>
        <section className="draw">
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={executeDraw}>
                <select
                    required
                    name="selectedParticipant"
                    id="selectedParticipant"
                    placeholder="Selecione o seu nome"
                    value={selectedParticipant}
                    onChange={evento => setSelectedParticipant(evento.target.value)}
                >
                    <option>Selecione um nome</option>
                    {participants.map(participant => <option key={participant}>{participant}</option>)}
                </select>
                <p>Clique em sortear para ver quem é seu amigo secreto!</p>
                <button className="draw-button">Sortear</button>
            </form>
            {secretFriend && <p className="result" role="alert">{secretFriend}</p>}
            <footer className="draw">
                <img src="/images/airplane.png" className="airplane" alt="Um desenho de um avião de papel" />
            </footer>
        </section>
    </Card>);
}

export default Draw;