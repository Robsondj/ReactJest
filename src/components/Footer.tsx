import { useNavigate } from "react-router-dom";
import { useListOfParticipants } from "../state/hook/useListOfParticipants";

import './Footer.css';

const Footer = () => {

    const participants = useListOfParticipants();

    const navigateTo = useNavigate();
    
    const start = () => {
        navigateTo('/sorteio');
    }

    return (<footer className="footer-config">
        <button className="button" disabled={participants.length < 3} onClick={start}>Iniciar</button>
        <img src="/images/bags.png" alt="Sacolas de compras" />
    </footer>);
}

export default Footer;