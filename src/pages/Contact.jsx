import Footer from "../components/Footer";
import Form from "../components/contact/Form";

export default function Contact() {
    return(
        <div>
            <h1 className="h-96 flex items-center justify-center text-6xl font-bold text-white">Contact</h1>
            <Form />
            <Footer />
        </div>
    )
}