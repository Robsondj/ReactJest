import Card from "../components/Card";
import Form from "../components/Form";
import ParticipantsList from "../components/ParticipantsList";
import Footer from "../components/Footer";

const Config = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Form />
                <ParticipantsList />
                <Footer />
            </section>
        </Card>
    );
}

export default Config;