import { useListOfParticipants } from "../state/hook/useListOfParticipants";

const ParticipantsList = () => {

    const participants: string[] = useListOfParticipants();
    return (
        <ul>
            {participants.map(participant => <li key={participant}>{participant}</li>)}
        </ul>
    )

}

export default ParticipantsList;